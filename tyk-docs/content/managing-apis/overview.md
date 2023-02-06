---
title: "Managing APIs in Tyk API Management"
date: 2023-02-06
weight: 4
menu: "main"
linkTitle: API Management
tags: ["Tyk API Management", "APIM", "Manage APIs", "API management lifecycle", "Licencing", "Open Source", "Self-Managed", "Tyk Cloud", "API Gateway"]
description: "How to decide on which Tyk deployment option is best for you"
aliases:
    - getting-started/deployment-options/
    - apim/
---

What is API Management? API management helps ensure the creation and publishing of your APIs is consistent and secure. It monitors performance and activity through analytics and logging and let's you manage all your transformations and policies in one central place.

{{< youtube CsNHkpQvVlQ >}}

Tyk API Management provides a centralized solution for organizations to manage, secure, and monitor their APIs to ensure their delivery to customers, partners, and developers in a reliable and scalable manner.

With API Management Software, organizations can:

API Creation and Publication: Design, develop, and publish APIs to expose backend systems and data to external parties through secure and scalable APIs.

API Security: Implement authentication, authorization, and encryption to secure APIs from unauthorized access.

API Monitoring and Analytics: Track API usage, performance, and identify potential issues to improve API performance and troubleshoot any problems.

API Access and Usage Management: Control who can access APIs, set usage quotas, and manage API subscriptions.

API User Experience Improvement: Enhance the API user experience with features such as OpenAPI Spec documentation, developer portals, CLIs and SDKs.

Overall, API Management Software provides a comprehensive solution for organizations to manage, secure, and monitor their APIs, ensuring reliable and scalable delivery to customers, partners, and developers.


Tyk API Management offering is comprised of the various [open and closed source]({{< ref "tyk-stack" >}}) components. Which one is right for your organisation depends on your requirements and preferences.  Please contact us for help:
{{< button_left href="https://tyk.io/contact/" color="green" content="Contact us" >}}


|                          | [Open Source]({{< ref "apim/open-source" >}})  |   [Self-Managed]({{< ref "tyk-on-premises" >}}) | [Cloud](https://account.cloud-ara.tyk.io/signup)
|--------------------------|--------------------|--------------------------|---------
| API Gateway Capabilities <br> <ul><li>Rate Limiting</li><li>Authentication</li> <li>API Versioning</li><li>Granular Access Control</li><li>GraphQL</li>  <li>and [much more][1]</li></ul> | ✅   |✅	 |✅      
| [Version Control]({{< ref "tyk-sync" >}}) Integration | ✅		  |✅	              |✅
| [API Analytics Exporter]({{< ref "tyk-pump" >}})| ✅		      |✅	              |✅
| [Tyk Manager]({{< ref "tyk-dashboard" >}}) | -	          |✅	              |✅ 
| [Single Sign On (SSO)]({{< ref "advanced-configuration/integrate/sso" >}})   | -	 |✅	        |✅
| [RBAC and API Teams]({{< ref "tyk-dashboard/rbac" >}})   | -	          |✅	              |✅	      
| [Universal Data Graph]({{< ref "universal-data-graph" >}})  | -	          |✅	        |✅
| [Multi-Tenant]({{< ref "basic-config-and-security/security/dashboard/organisations" >}}) | - |✅  |✅
| [Multi-Data Center]({{< ref "tyk-multi-data-centre" >}})   | -	          |✅	 |✅
| [Developer Portal]({{< ref "tyk-developer-portal" >}})    | -		      |✅	  |✅
| [Developer API Analytics]({{< ref "tyk-dashboard-analytics" >}})  | -		      |✅	  |✅
| Hybrid Deployments                       | -		      |-	    |✅
| Fully-Managed SaaS       | -		      |-	              |✅
| HIPAA, SOC2, PCI          | ✅		      |✅	              | -

# Licensing
### Open Source (OSS)
The Tyk Gateway is the backbone of all our solutions. You can deploy it for free, forever.

Head on over to the [OSS section]({{< ref "apim/open-source" >}}) for more information on it and the other open source components.
### Self-managed (On-Prem)

{{< include "self-managed-licensing-include" >}}


### Cloud (Software as a Service / SaaS)
With Tyk Cloud all of the above closed-source components are available. Get your free account [here](https://account.cloud-ara.tyk.io/signup).


There are many open and closed source [Tyk components]({{< ref "tyk-stack" >}}) that make up the various solutions.
