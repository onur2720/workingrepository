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
p.lead
p.lead.mb-4
form(action="/", method="POST")
    .input-group.mb-3
input(name="loan_email", type="email", placeholder="Email").form-control
    .input-group-append
input(name="loan_number", type="number", placeholder="cpr-nr").form-control
    .input-group-append
input(name="loan_text", type="text", placeholder="Navn").form-control
    .input-group-append
input(name="loan_number1", type="number1", placeholder="Beløb").form-control
    .input-group-append
input(name="loan_number2", type="number2", placeholder="Løbetid").form-control
    .input-group-append

button(type="submit").btn.btn-primary Ansøg
include ./common/footer.pug
+footer()



