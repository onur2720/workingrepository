//Arbejder på startsiden - Tayyab
doctype html
html(lang='en')
include ./common/head.pug
+head("Starter MVP")
body
header
include ./common/navbar.pug
+navbar(user)
    .container
    .row.align-items-center
    .col-md-6.order-md-1.text-center.text-md-left.pr-md-5
h1.mb-3 Her kan du udfylde formularen til dit lån


