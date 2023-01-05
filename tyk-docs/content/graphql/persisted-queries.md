---
title: "Persisting GraphQL queries"
date: 2021-05-05
tags: ["GraphQL", "persisted queries"]
description: "How to persiste any GraphQL query in Tyk"
menu:
  main:
    parent: "GraphQL"
weight: 2
aliases:
    - /graphql/persist-query/
---

Tyk Gateway `4.3.0` release includes a way to expose GraphQL queries as REST endpoints. For now, this can only be configured via the raw API definition, Tyk Dashboard support is coming soon.

## How to persist GraphQL query

The ability to expose a GraphQL query as a REST endpoint can be enabled by adding the `persist_graphql` section of the `extended_paths` on any API version you intend to be used to serve as the GraphQL query to REST endpoint proxy.

Here is a sample REST API proxy:

```json
{
  "name": "Persisted Query API",
  "api_id": "trevorblades",
  "org_id": "default",
  "use_keyless": true,
  "enable_context_vars": true,
  "definition": {
    "location": "header",
    "key": "x-api-version"
  },
  "proxy": {
    "listen_path": "/trevorblades/",
    "target_url": "https://countries.trevorblades.com",
    "strip_listen_path": true
  }
}
```

The target URL should point to a GraphQL upstream although this is a REST proxy. This is important for the feature to work.

### Adding versions

On its own, this isn’t particularly remarkable. To enable GraphQL to REST middleware, modify the Default version like so:

```json
{
  "name": "Persisted Query API",
  "definition": {
    "location": "header",
    "key": "x-api-version"
  },
  ...
  "version_data": {
    "not_versioned": true,
    "default_version": "",
    "versions": {
      "Default": {
        "name": "Default",
        "expires": "",
        "paths": {
          "ignored": [],
          "white_list": [],
          "black_list": []
        },
        "use_extended_paths": true,
        "global_headers": {},
        "global_headers_remove": [],
        "global_response_headers": {},
        "global_response_headers_remove": [],
        "ignore_endpoint_case": false,
        "global_size_limit": 0,
        "override_target": "",
        "extended_paths": {
          "persist_graphql": [
            {
              "method": "GET",
              "path": "/getContinentByCode",
              "operation": "query ($continentCode: ID!) {\n    continent(code: $continentCode) {\n        code\n        name\n        countries {\n            name\n        }\n    }\n}",
              "variables": {
                "continentCode": "EU"
              }
            }
          ]
        }
      }
    }
  }
}
```

The vital part of this is the `extended_paths.persist_graphql` field. The `persist_graphql` object consists of three fields:

`method`: The HTTP method used to access that endpoint, in this example, any GET requests to `<PROXY ENDPOINT>/getContinentByCode` will be handled by the *persist graphql* middleware

`path`: The path the middleware listens to

`operation`: This is the GraphQL operation (`query` in this case) that is sent to the upstream.

`variables`: A list of variables that should be included in the upstream request.

If you run a request to your proxy, you should get a response similar to this: 

```json
{
    "data": {
        "continent": {
            "code": "EU",
            "name": "Europe",
            "countries": [
                {
                    "name": "Andorra"
                },
                ...
            ]
        }
    }
}
```

### Dynamic variables

We have seen support for passing static variable values via the API definition, but there will be cases where we want to extract variables from the request header or URL.

If we add an extra `persist_graphql` definition like so:

```json
{
  "method": "GET",
  "path": "/getCountryByCode",
  "operation": "query ($countryCode: ID!) {\n   country(code: $countryCode) {\n        code\n        name\n        }\n}",
  "variables": {
    "countryCode": "$tyk_context.headers_Code"
  }
}
```

And make a request to that endpoint providing header `Code: UK`, we should see a response similar to this:

```json
{
    "data": {
        "country": {
            "code": "UK",
            "name": "United Kingdom"
        }
    }
}
```

Similarly, we can also pass variables in the request URL. Let’s modify our new `persist_graphql` block to this:

```json
{
  "method": "GET",
  "path": "/getCountryByCode/{countryCode}",
  "operation": "query ($countryCode: ID!) {\n   country(code: $countryCode) {\n        code\n        name\n        }\n}",
  "variables": {
    "countryCode": "$path.countryCode"
  }
}
```

If we make a request to `/getCountryByCode/NG` we should get a result similar to this:

```json
{
    "data": {
        "country": {
            "code": "NG",
            "name": "Nigeria"
        }
    }
}
```