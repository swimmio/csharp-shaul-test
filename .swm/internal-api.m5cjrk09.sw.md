---
title: Internal API
---
## Introduction

In this doc we will describe the API for {{API Name (e.g., sending Analytic Events)}} and how to use it correctly.

We use this API when {{use cases}}.

## API definition

## 

<SwmSnippet path="/NewCode.cs" line="16">

---

&nbsp;

```c#
            // Commit 1
            // Commit 2 - develop keeps going
            // Commit 3 - develop goes more
            // Commit 3.5 - develop goes more
            // Commit 3.6 - develop goes more
            // Commit 4 - develop goes more forward
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("global.json");
            string conString = builder.Build().GetConnectionString("DefaultConnection");
            // I want to cherry pick this to the tag.

            MyContext myContext = MyContextFactory.Create(conString);
            TreatmentRepository tr = new TreatmentRepository(myContext);
            foreach (Treatment item in tr.GetAll())
            {
                Console.WriteLine(item.Text);
            }
            // Cherry pick this, with a squash commit
            Console.WriteLine(conString);
```

---

</SwmSnippet>

## Simple usage

<SwmSnippetPlaceholder>

Show a simple example of using this API

</SwmSnippetPlaceholder>

## Advanced usage: {{explain a scenario where this is needed}}

## 

<SwmSnippet path="/Program.cs" line="1">

---

&nbsp;

```c#
public static void notMain () {
```

---

</SwmSnippet>

## Best practices and additional notes

When using this API, it is important to follow a few best practices and avoid some common mistakes.

<SwmSnippetPlaceholder>

Show an example of a best practice and explain why it is important to implement the API this way

</SwmSnippetPlaceholder>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv" repo-name="csharp-shaul-test"><sup>Powered by [Swimm](https://swimm-web-app.web.app/)</sup></SwmMeta>
