---
title: mermaid test 2
---
```mermaid
graph TD
a --> DbContext

%% Swimm:
%% graph TD
%% a --> <SwmToken path="/MyContext.cs" pos="6:9:9" line-data="    public class MyContext : DbContext">`DbContext`</SwmToken>
```

<SwmSnippet path="/MyContext.cs" line="6">

---

&nbsp;

```c#
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) {}
        public virtual DbSet<Treatment> Treatments { get; set; }
    }
```

---

</SwmSnippet>

```mermaid
graph TD
a --> b
c --> options

%% Swimm:
%% graph TD
%% a --> b
%% c --> <SwmToken path="/MyContext.cs" pos="8:10:10" line-data="        public MyContext(DbContextOptions&lt;MyContext&gt; options) : base(options) {}">`options`</SwmToken>
```

```mermaid
graph TD
e --> f
g --> DbSet

%% Swimm:
%% graph TD
%% e --> f
%% g --> <SwmToken path="/MyContext.cs" pos="9:5:5" line-data="        public virtual DbSet&lt;Treatment&gt; Treatments { get; set; }">`DbSet`</SwmToken>
```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv" repo-name="csharp-shaul-test"><sup>Powered by [Swimm](https://swimm-web-app.web.app/)</sup></SwmMeta>
