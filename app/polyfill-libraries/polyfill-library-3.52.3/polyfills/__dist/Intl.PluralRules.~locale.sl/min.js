Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({locale:"sl",categories:{cardinal:["one","two","few","other"],ordinal:["other"]},fn:function(l,e){var t=String(l).split("."),a=t[0],o=!t[1],n=a.slice(-2);return e?"other":o&&1==n?"one":o&&2==n?"two":o&&(3==n||4==n)||!o?"few":"other"}});