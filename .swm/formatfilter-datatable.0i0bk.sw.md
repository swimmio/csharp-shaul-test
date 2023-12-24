---
id: 0i0bk
title: formatFilter - DataTable
file_version: 1.1.3
app_version: 1.17.4
---

The `formatFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:64:2:2:`function formatFilter(filter: ColumnFilter[], columns: ColumnDef&lt;DefaultDataType&gt;[]) {`"/> method helps us transform `filter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:64:4:4:`function formatFilter(filter: ColumnFilter[], columns: ColumnDef&lt;DefaultDataType&gt;[]) {`"/>'s `ColumnFilter[]`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:64:7:9:`function formatFilter(filter: ColumnFilter[], columns: ColumnDef&lt;DefaultDataType&gt;[]) {`"/> structure into the object structure our API requires for query requests.

## Non-`ANY_COLUMN_ID`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:68:8:8:`    if (nextColumn !== ANY_COLUMN_ID) {`"/> Filters

For all columns expect for `ANY_COLUMN_ID`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:68:8:8:`    if (nextColumn !== ANY_COLUMN_ID) {`"/>, we first will retrieve the `columnDef`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:71:3:3:`      const columnDef = columns.find(`"/>. For all filters set by the user, the `columnDef`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:71:3:3:`      const columnDef = columns.find(`"/> should be set/found.

Any filters set by the application, either in `baseFilter`<swm-token data-swm-token=":src/components/data-table/model/data-table.ts:132:1:1:`  baseFilter?: ColumnFilter&lt;FieldNames&gt;[];`"/> or `linkedFilter`<swm-token data-swm-token=":src/components/data-table/model/data-table.ts:133:1:1:`  linkedFilter?: LinkedColumnFilter&lt;FieldNames&gt;[];`"/>, if the filter relates to a field with a column definition then `columnDef`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:71:3:3:`      const columnDef = columns.find(`"/> will be set/found. However it is possible that a `baseFilter`<swm-token data-swm-token=":src/components/data-table/model/data-table.ts:132:1:1:`  baseFilter?: ColumnFilter&lt;FieldNames&gt;[];`"/> or `linkedFilter`<swm-token data-swm-token=":src/components/data-table/model/data-table.ts:133:1:1:`  linkedFilter?: LinkedColumnFilter&lt;FieldNames&gt;[];`"/> could be defined for a field returned by the query, but not defined as a column. In this situation our `processOrColumnFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:76:3:3:`      const processOrColumnFilter = (hasColumnDef: boolean) =&gt; {`"/> or `processColumnFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:99:3:3:`      const processColumnFilter = (hasColumnDef: boolean) =&gt; {`"/> methods will not use `formatOperator`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:31:2:2:`const formatOperator = ({ columnType, operator }) =&gt; {`"/> or `formatValue`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:47:2:2:`const formatValue = (`"/> and instead use the direct values from the filter object. Since these filter definitions are immutable by the user, we can assume them to be value formats already.

### `next.or`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:124:4:6:`      if (next.or) {`"/>

If `next.or`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:124:4:6:`      if (next.or) {`"/> is set, then we will iterate over all of the filters inside the `next.or`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:77:7:9:`        const orFilter = next.or.map((_filter) =&gt; {`"/> array and create an `orFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:77:3:3:`        const orFilter = next.or.map((_filter) =&gt; {`"/> array that has all of the or filters formatted. If `formatted.or`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:91:4:6:`        if (formatted.or) {`"/> exists then we will extend the existing array, otherwise we will set `or`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:94:10:10:`          Object.assign(formatted, { or: orFilter });`"/> to `orFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:94:13:13:`          Object.assign(formatted, { or: orFilter });`"/>.

### `formatted.and`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:114:4:6:`          if (formatted.and) {`"/>

The standard filters will utilize the `and` filter functionality.

First, we will set `nextFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:107:3:3:`        const nextFilter = {`"/> equal to the formatted filter object.

If `formatted[nextColumn]`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:113:4:7:`        if (formatted[nextColumn]) {`"/> exists we will see if it has an existing `formatted.and`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:114:4:6:`          if (formatted.and) {`"/> array. If so, we will add our `nextFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:115:7:7:`            formatted.and.push(nextFilter);`"/>, otherwise we will create the `formatted.and`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:117:1:3:`            formatted.and = [nextFilter];`"/> array.

Otherwise if this is the first filter for this column, we will assign `nextFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:120:8:8:`          Object.assign(formatted, nextFilter);`"/> directly to `formatted`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:120:5:5:`          Object.assign(formatted, nextFilter);`"/>.

### Repeat for Each Filter

The flow described above will then be repeated for each `filter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:64:4:4:`function formatFilter(filter: ColumnFilter[], columns: ColumnDef&lt;DefaultDataType&gt;[]) {`"/> in the array.

Once all filters have been applied to the `formatted`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:65:8:8:`  return filter.reduce((formatted, next) =&gt; {`"/> object, that object will be returned.

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/data-table/controls/filter/format-filter.ts
```typescript
65       return filter.reduce((formatted, next) => {
66         const nextColumn = next.columnId;
67     
68         if (nextColumn !== ANY_COLUMN_ID) {
69           // Handle Formatting for Columns as Normal
70           // TODO: Need to figure out how the tan-stack react table typing wants the ColumnDef DataType to be typed in able to acknowledge accessorKey as a valid property...
71           const columnDef = columns.find(
72             // @ts-ignore
73             (c) => typeof c.accessorKey !== 'undefined' && c.accessorKey === nextColumn,
74           );
75     
76           const processOrColumnFilter = (hasColumnDef: boolean) => {
77             const orFilter = next.or.map((_filter) => {
78               const _filterOperator = hasColumnDef
79                 ? formatOperator({ columnType: columnDef.meta.columnType, operator: _filter.operator })
80                 : _filter.operator;
81               const _filterValue = hasColumnDef
82                 ? formatValue(columnDef.meta.columnType, _filter.operator, _filter.value)
83                 : _filter.value;
84               return {
85                 [_filter.columnId]: {
86                   [_filterOperator]: _filterValue,
87                 },
88               };
89             });
90     
91             if (formatted.or) {
92               Object.assign(formatted, { or: [...formatted.or, ...orFilter] });
93             } else {
94               Object.assign(formatted, { or: orFilter });
95             }
96             return formatted;
97           };
98     
99           const processColumnFilter = (hasColumnDef: boolean) => {
100            const _filterOperator = hasColumnDef
101              ? formatOperator({ columnType: columnDef.meta.columnType, operator: next.operator })
102              : next.operator;
103            const _filterValue = hasColumnDef
104              ? formatValue(columnDef.meta.columnType, next.operator, next.value)
105              : next.value;
106    
107            const nextFilter = {
108              [nextColumn]: {
109                [_filterOperator]: _filterValue,
110              },
111            };
112    
113            if (formatted[nextColumn]) {
114              if (formatted.and) {
115                formatted.and.push(nextFilter);
116              } else {
117                formatted.and = [nextFilter];
118              }
119            } else {
120              Object.assign(formatted, nextFilter);
121            }
122          };
123    
124          if (next.or) {
125            processOrColumnFilter(!!columnDef);
126          } else {
127            processColumnFilter(!!columnDef);
128          }
```

<br/>

## `ANY_COLUMN_ID`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:68:8:8:`    if (nextColumn !== ANY_COLUMN_ID) {`"/> Filters

The functionality `formatFilter`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:64:2:2:`function formatFilter(filter: ColumnFilter[], columns: ColumnDef&lt;DefaultDataType&gt;[]) {`"/> when `nextColumn`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:66:3:3:`    const nextColumn = next.columnId;`"/> is equal to `ANY_COLUMN_ID`<swm-token data-swm-token=":src/components/data-table/controls/filter/format-filter.ts:68:8:8:`    if (nextColumn !== ANY_COLUMN_ID) {`"/> can be read here: [Any Column Filter - DataTable](any-column-filter-datatable.k80ob.sw.md)

## Related Snippets

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/data-table/controls/filter/format-filter.ts
```typescript
47     const formatValue = (
48       columnType: ColumnType,
49       operator: FilterOperator,
50       value: ColumnFilterValue,
51     ) => {
52       if (columnType === ColumnType.number && typeof value === 'string') {
53         value = parseFloat(value);
54       }
55       if (operator === FilterOperator.isEmpty || operator === FilterOperator.isNotEmpty) {
56         return null;
57       }
58       if ([FilterOperator.iLike, FilterOperator.notILike].includes(operator)) {
59         return `%${typeof value === 'string' ? value.trim() : value}%`;
60       }
61       return typeof value === 'string' ? value.trim() : value;
62     };
```

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/data-table/controls/filter/format-filter.ts
```typescript
31     const formatOperator = ({ columnType, operator }) => {
32       if (
33         columnType === ColumnType.date &&
34         (operator === FilterOperator.eq || operator === FilterOperator.neq)
35       ) {
36         return FilterOperator.between;
37       }
38       if (operator === FilterOperator.isEmpty) {
39         return FilterOperator.is;
40       }
41       if (operator === FilterOperator.isNotEmpty) {
42         return FilterOperator.isNot;
43       }
44       return operator;
45     };
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBZnVsZmlsbGQtbWFuYWdlciUzQSUzQWZ1bGZpbGxk/docs/0i0bk).
