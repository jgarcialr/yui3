YUI.add("autocomplete-highlighters-accentfold",function(e,t){var o=e.Highlight,a=e.Array;e.mix(e.namespace("AutoCompleteHighlighters"),{charMatchFold:function(t,r){var n=a.unique(t.split(""));return a.map(r,function(t){return o.allFold(t.text,n)})},phraseMatchFold:function(r,t){return a.map(t,function(t){return o.allFold(t.text,[r])})},startsWithFold:function(r,t){return a.map(t,function(t){return o.allFold(t.text,[r],{startsWith:!0})})},subWordMatchFold:function(t,r){var n=e.Text.WordBreak.getUniqueWords(t);return a.map(r,function(t){return o.allFold(t.text,n)})},wordMatchFold:function(r,t){return a.map(t,function(t){return o.wordsFold(t.text,r)})}})},"@VERSION@",{requires:["array-extras","highlight-accentfold"]});