---
date: 2017-03-24T17:10:33Z
title: "GraphQL "
tags: ["GraphQL", "Playground", "CORS", "UDG"]
description: "How to publish GraphQL APIs to your Tyk Developer Portal"
menu:
  main:
    parent: "Tyk Portal Classic"
weight: 7
aliases:
  - /tyk-developer-portal/graphql
---

As of Tyk v3.0.0, you can now publish GraphQL APIs, including [Universal Data Graph]({{< ref "universal-data-graph" >}}) APIs(UDG) to the Tyk Developer Portal.

When you do that, your API consumers can navigate through a GraphQL Playground, with an IDE complete with Intellisense.

{{< img src="/img/portal/portal-graphql.png" alt="Portal GraphQL Playground" >}}

## Video Walkthrough

We have a YouTube walkthrough of how to publish a GraphQL API to your Developer Portal:

{{< youtube A2Hn9ub2mNg >}}

## How To Set Up

Simply create a GraphQL or Universal Data Graph API, create a Policy which protects it, and then publish it to the Developer Portal Catalogue.

In the "Create a Catalogue" section, at the bottom, make sure you enable the "Display Playground" 


{{< img src="/img/portal/portal-graphql-setup.png" alt="Portal GraphQL Playground Setup" >}}

And then, when your API consumers are on the Developer Portal Catalogue and click on View Documentation, they will be taken to the GraphQL Playground.

{{< img src="/img/portal/portal-graphql-playground-viewdocs.png" alt="Portal GraphQL Playground View Docs" >}}


## Protected GraphQL Catalogue

If you have a protected API, your users won't be able to inspect the GraphQL schema or make API calls until they add their API Key to the Headers section:

{{< img src="/img/portal/portal-graphql-header-injection.png" alt="Portal GraphQL Playground Header Injection" >}}

## CORS

You may have to enable the following CORS settings in the "Advanced Options" of the API Designer to allow your consumers to access the GraphQL Playground:


{{< img src="/img/portal/portal-graphql-cors.png" alt="Portal GraphQL Playground CORS" >}}
