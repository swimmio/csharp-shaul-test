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
        public MyContext(DbContextOptions<MyContext> options) : base(optForShaulan) {}
    }
```

---

</SwmSnippet>

```mermaid
graph TD
c --> optForShaulan

%% Swimm:
%% graph TD
%% c --> <SwmToken path="/MyContext.cs" pos="8:17:17" line-data="        public MyContext(DbContextOptions&lt;MyContext&gt; options) : base(optForShaulan) {}">`optForShaulan`</SwmToken>
```

```mermaid
graph TD
e --> f
g --> f
```

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv" repo-name="csharp-shaul-test"><sup>Powered by [Swimm](https://swimm-web-app.web.app/)</sup></SwmMeta>
