---
title: Swimmport view mode
---
<SwmSnippet path="/MyContext.cs" line="6">

---

<SwmToken path="/MyContext.cs" pos="6:5:5" line-data="    public class MyContext : DbContext">`MyContext`</SwmToken>

```c#
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) {}
        public virtual DbSet<Treatment> Treatments { get; set; }
    }
```

---

</SwmSnippet>

<SwmPath>[NewCode.cs](NewCode.cs)</SwmPath>

&nbsp;

This is the models folder

This is the repositories folder

Neither models nor repositories were suggested.

models/

&nbsp;

<SwmPath>[models/](/models/)</SwmPath>

<SwmPath>[models](models)</SwmPath>

repositories/

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv" repo-name="csharp-shaul-test"><sup>Powered by [Swimm](https://swimm-web-app.web.app/)</sup></SwmMeta>
