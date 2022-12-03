---
date: 2017-03-22T16:57:26Z
title: "Kubernetes "
tags: ["Tyk Stack", "Self Managed", "Installation", "Kubernetes", "Helm Chart", "Tyk Operator"]
description: "How to install Tyk in a self-managed environment using Kubernetes"
menu:
  main:
    parent: "Self-Managed Installation"
weight: 2
url: "/tyk-on-premises/kubernetes"
aliases:
  - /getting-started/installation/with-tyk-on-premises/kubernetes
  - /tyk-on-premises/kubernetes
---

## Installing Tyk

The main ways to install *Tyk Self-Managed* in a Kubernetes cluster are via Helm charts or via Kubernetes manifest files.

### Tyk Helm Charts
This is the preferred way to install Tyk Self-Managed Pro on Kubernetes. 
We are actively working to add flexibility and more user flows to our chart. Please reach out
to our teams on support or the cummunity forum if you have questions, requests or suggestions for improvements.
Go to [Tyk Helm Charts]({{< ref "/content/tyk-on-prem/installation/kubernetes/helm-chart.md" >}}) for detailed installation instructions.

## Tyk Operator and Ingress 
For a GitOps workflow used with a **Tyk Self-Managed** installation or setting the Tyk Gateway as a Kubernetes ingress controller, Tyk Operator enables you to manage API definitions, security policies and other Tyk features using Kubernetes manifest files.

