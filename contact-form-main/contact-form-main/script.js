
let txt1 = window.document.querySelector('input.inputname')
let txt2 = window.document.querySelector('input.inputname2')
let femail = window.document.querySelector('input.email')
let xgeneral = window.document.getElementById('general')
let xsupport = window.document.getElementById('inputsupport')
let contgeneral = window.document.querySelector('div.general_enquiry')
let contsupport = window.document.querySelector('div.general_enquiry_2')
let fmessage = window.document.querySelector('textarea#inputmessage')
let xsubmit = window.document.getElementById('submitcheck')
let fieldname = window.document.querySelector('div.fieldname')
let fieldlastname = window.document.querySelector('div.fieldlastname')
let plsemail = window.document.querySelector('div.please')
let plsquery = window.document.querySelector('div.pleasequery')
let finput = window.document.getElementsByName('inputrad')
let ffield = window.document.querySelector('div.finalfield')
let fsubmit = window.document.querySelector('div.errorsubmit')

let contalert = window.document.querySelector('div.alertpai')


function submit() {

    let verification = 'success'


    if (txt1.value.length == 0) {

        fieldname.style.display = 'block'
        txt1.style.border = '1px solid hsl(0, 66%, 54%)'
         verification = 'error'
    } else {

        fieldname.style.display = 'none'
        txt1.style.border =' 1px solid rgba(0, 0, 0, 0.486)'

    }

    if (txt2.value.length == 0) {
         verification = 'error'
        fieldlastname.style.display = 'block'
        txt2.style.border = '1px solid hsl(0, 66%, 54%)'

    } else {
        fieldlastname.style.display = 'none'
         txt2.style.border = ' 1px solid rgba(0, 0, 0, 0.486)'

        
    }

    if (femail.value.length == 0) {
         verification = 'error'
        plsemail.style.display = 'block'
        femail.style.border = '1px solid hsl(0, 66%, 54%)'


    } else {
        plsemail.style.display = 'none'
        femail.style.border = ' 1px solid rgba(0, 0, 0, 0.486)'
        

    }

    if (finput[0].checked == false && finput[1].checked == false) {

        plsquery.style.display = 'block'

    } else if (finput[0].checked) {
        plsquery.style.display = 'none'
        



    }


    if (fmessage.value.length == 0) {
         verification = 'error'
        ffield.style.display = 'block'
        fmessage.style.border = '1px solid hsl(0, 66%, 54%)'

    } else {
        ffield.style.display = 'none'
         fmessage.style.border = ' 1px solid rgba(0, 0, 0, 0.486)'
       
    }

    if (xsubmit.checked == false) {
         verification = 'error'

        fsubmit.style.display = 'block'




    } else {
        fsubmit.style.display = 'none'
        

    } if (verification !== 'error') {
        
        contalert.style.display ='block'
    }
}



/*  contgeneral.style.background = 'blue';
 contsupport.style.background = 'blue';*/
/* function general(){
    let xgeneral = window.document.getElementById('general')
    let xsupport = window.document.getElementById('inputsupport')
    let contgeneral = window.document.querySelector('div.general_enquiry')
    let contsupport = window.document.querySelector('div.general_enquiry_2')
    let finput = window.document.getElementsByName('inputrad')
    let ffield = window.document.querySelector('div.finalfield')

   

    if(finput[0].checked){
        contgeneral.style.background = 'hsl(148, 38%, 91%)';

    }else{
         contgeneral.style.background = 'white'
    }
 }
    */


function general() {



    if (finput[0].checked) {


        contgeneral.style.background = 'hsl(148, 38%, 91%)';
        contsupport.style.background = 'white'

    }


}

function support() {


    if (finput[1].checked) {

        contgeneral.style.background = 'white'
        contsupport.style.background = 'hsl(148, 38%, 91%)';
    }
}