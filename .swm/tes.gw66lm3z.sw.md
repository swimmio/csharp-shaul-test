---
title: tes
---
test

&nbsp;

<SwmSnippet path="/NewCode.cs" line="22">

---

&nbsp;

```c#
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("global.json");
            string conString = builder.Build().GetConnectionString("DefaultConnection");
            // I want to cherry pick this to the tag.

```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv" repo-name="csharp-shaul-test"><sup>Powered by [Swimm](https://swimm-web-app.web.app/)</sup></SwmMeta>
