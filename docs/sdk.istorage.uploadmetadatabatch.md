<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [IStorage](./sdk.istorage.md) &gt; [uploadMetadataBatch](./sdk.istorage.uploadmetadatabatch.md)

## IStorage.uploadMetadataBatch() method

Uploads JSON metadata to IPFS

<b>Signature:</b>

```typescript
uploadMetadataBatch(metadatas: JsonObject[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string): Promise<UploadMetadataBatchResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadatas | [JsonObject](./sdk.jsonobject.md)<!-- -->\[\] |  |
|  fileStartNumber | number | <i>(Optional)</i> Optional. The first file file name begins with. |
|  contractAddress | string | <i>(Optional)</i> Optional. The contract address the data belongs to. |
|  signerAddress | string | <i>(Optional)</i> Optional. The address of the signer. |

<b>Returns:</b>

Promise&lt;UploadMetadataBatchResult&gt;

