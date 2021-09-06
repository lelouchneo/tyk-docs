---
date: 2020-03-17T19:13:22Z
Title: Task 2 - Set up Your Organisation
tags: ["Tyk Stack", "Tyk Cloud", "SaaS", "Organisation"]
description: "Setting up your organisation for Tyk Cloud"
menu:
  main:
    parent: "Getting Started with Tyk Cloud"
weight: 2
aliases:
    - /tyk-cloud/setup-org/
---


## Introduction

You can use Tyk Cloud to manage your APIs effectively and with minimal effort. To do so, you need to set up your organisation, which is what this page explains how to do.

## Step One - Name your Organisation

Give your organisation a name. This is up to you, but most use their company name.

## Step Two - Select a Home Region

Select a region from the drop-down list where your [Control Planes](/docs/tyk-cloud/troubleshooting-support/glossary/#control-plane) will be deployed and your data stored. The number of regions available will depend on your licence. Further regions can be added as an upgrade option.

{{< note success >}}
**Note**
  
Tyk Cloud can currently be deployed across 2 AWS regions in the USA plus UK, Germany and Singapore. If you have any concerns about Brexit impacting the way you store data you should read [AWS's regularly updated Brexit statement](https://aws.amazon.com/compliance/gdpr-center/brexit/).
{{< /note >}}

## Demo or Manual Setup?

You can now select how to configure your deployment.

### Demo Setup

Our demo setup will quickly configure your first deployment setup automatically, creating your first team, control plane and edge gateway.

### Manual Setup

This setup option gives you full control on creating the following:

* Teams
* Environments
* Configuration and deployment of Control Planes and Edge Gateways

For a manual setup you'll get started by [setting up your first team]({{< ref "/content/tyk-cloud/getting-started-tyk-cloud/setup-team.md" >}}).