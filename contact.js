
document.getElementById('enquiryForm').addEventListener('submit',function(e){
  e.preventDefault();
  var name=document.getElementById('name').value.trim();
  var email=document.getElementById('email').value.trim();
  var stage=document.getElementById('stage').value;
  var message=document.getElementById('message').value.trim();
  var body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nStage: '+stage+'\nMessage:\n'+message);
  window.location.href='mailto:dralben.sigamani@novise.ai?subject=Qualitative%20Research%20Enquiry&body='+body;
});
