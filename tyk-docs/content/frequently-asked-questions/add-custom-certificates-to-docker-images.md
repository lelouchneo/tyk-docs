---
date: 2017-03-27T16:30:52+01:00
title: Add Custom Certificates to Trusted Storage of Docker Images
menu:
  main:
    parent: "Frequently Asked Questions"
weight: 0 
---

There are four ways to load your own self-signed certs into a Tyk Gateway Docker image.

1. Modify or extend the Dockerfile.
2. Override the entrypoint. This method does not require modifying the Dockerfile or creating your own. Instead, you can mount your root certificate as a volume, and then before executing `entrypoint.sh`, update the ca certificates.
```{.copyWrapper}
docker run -it tykio/tyk-gateway:latest \
 -v $(pwd)/myroot.crt:/usr/local/share/ca-certificates/myroot.crt \
 update-ca-certificates && entrypoint.sh
```

3. It is also possible to apply pinned root certificates at the Gateway's global level. Once you have uploaded your root certificate inside Tyk's certificate store, inside your `tyk.conf`, under `security.pinned_public_keys`, you should be able to insert the certificate id into the array. That way, you do not need to configure it on a per-api basis. 

{{< note success >}}
**Note**  

This applies to the Tyk Gateway Docker image only.
{{< /note >}}

4. Install Gateway using Helm Chart and mount extra Volume:
```yaml
   ## extraVolumes A list of volumes to be added to the pod
   ## extraVolumes:
   ##   - name: ca-certs
   ##     secret:
   ##       defaultMode: 420
   ##       secretName: ca-certs
   extraVolumes: 
     - name: self-signed-ca
       secret:
         secretName: self-signed-ca-secret
   ## extraVolumeMounts A list of volume mounts to be added to the pod
   ## extraVolumeMounts:
   ##   - name: ca-certs
   ##     mountPath: /etc/ssl/certs/ca-certs.crt
   ##     readOnly: true
   extraVolumeMounts: 
     - name: self-signed-ca
       mountPath: "/etc/ssl/certs/tykCA.pem"
       subPath: tykCA.pem
```


Contact us to learn more:

{{< button_left href="https://tyk.io/contact/" color="green" content="Contact us" >}}
