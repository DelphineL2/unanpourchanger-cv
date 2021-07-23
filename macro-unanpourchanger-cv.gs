function ajouter_experience() {
// cellules formulaires 
const FormEntrepriseCol = 4;
const FormEntrepriseLig = 5;
const FormLieuCol = 6;
const FormLieuLig = 5;
const FormPosteCol = 4;
const FormPosteLig = 9;
const FormActiviteCol = 4;
const FormActiviteLig = 11;
const FormTechnologieCol = 4;
const FormTechnologieLig = 13;
const FormApprisCol = 4;
const FormApprisLig = 15;
const FormQuitterCol = 4;
const FormQuitterLig = 17;
const FormDebutCol = 4;
const FormDebutLig = 7;
const FormFinCol = 6;
const FormFinLig = 7;

// cellules Experiences
const ExpeEntrepriseCol = 1;
const ExpeLieuCol = 2;
const ExpeDebutCol = 3;
const ExpeFinCol = 4;

const ExpePosteCol = 5;
const ExpeActiviteCol = 6;
const ExpeTechnologieCol = 7;
const ExpeApprisCol = 8;
const ExpeQuitterCol = 9;
var sheet = SpreadsheetApp.getActiveSpreadsheet();
var Fformulaire = sheet.getSheetByName('Formulaire');   
var Fexperience = sheet.getSheetByName('Experience'); 


var column = Fexperience.getRange('A:A');
var values = column.getValues(); // get all data in one call
var ExperienceLigne = 0 ;
while ( values[ExperienceLigne][0] != "" ) {
    ExperienceLigne++;
  }
ExperienceLigne++;
Fformulaire.getRange(FormEntrepriseLig,FormEntrepriseCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeEntrepriseCol));
Fformulaire.getRange(FormLieuLig,FormLieuCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeLieuCol));
Fformulaire.getRange(FormPosteLig,FormPosteCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpePosteCol));
Fformulaire.getRange(FormActiviteLig,FormActiviteCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeActiviteCol));
Fformulaire.getRange(FormTechnologieLig,FormTechnologieCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeTechnologieCol));
Fformulaire.getRange(FormApprisLig,FormApprisCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeApprisCol));
Fformulaire.getRange(FormQuitterLig,FormQuitterCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeQuitterCol));
Fformulaire.getRange(FormDebutLig,FormDebutCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeDebutCol));
Fformulaire.getRange(FormFinLig,FormFinCol).copyTo(Fexperience.getRange(ExperienceLigne,ExpeFinCol));

}
