---
date: 2017-03-24T17:09:48Z
title: Tyk Developer Portal
weight: 10
menu: 
    main:
        parent: "Tyk Stack"
url: "tyk-developer-portal"
aliases:
    - /getting-started/tyk-components/developer-portal/
---

The Tyk Developer Portal is a small CMS-like system that enables you to expose a facade of your APIs and then allow third-party developers to register and use your APIs.

The developer portal enables you to:

*   Host pages written in Markdown to describe your API and product.
*   Use Bootstrap based templates to completely customise the look and feel.
*   Host your API documentation in Swagger/OpenAPI or API Blueprint for developers to use. In the case of Swagger/OpenAPI, you can either paste your Swagger content (JSON or YAML) into the code editor, or via a link to a public Swagger hosted URL, which can then be rendered by using [Swagger UI](https://swagger.io/tools/swagger-ui/).
*   Unlike other platforms, Tyk will not auto-publish your APIs to the Portal, instead they are presented as a facade, you choose what APIs and what Policies to expose to the Portal.
*   Fully control the flow of the developer sign-up and enrollment.

{{< note success >}}
**Note**  

Support for API Blueprint is being deprecated. See [Importing APIs](/docs/tyk-configuration-reference/import-apis/#api-blueprint-is-being-deprecated) for more details.
{{< /note >}}

The developer Portal is available to Pro (On-Premises), Cloud Classic and Multi-Cloud users.

For examples of how clients have used our portal, visit:

- [https://developer.hotelbeds.com/](https://developer.hotelbeds.com/)
- [https://developer.geops.io/](https://developer.geops.io/)
- [https://opentransportdata.swiss/en/](https://opentransportdata.swiss/en/)
- [http://www.alemana.io/portal/](http://www.alemana.io/portal/)
