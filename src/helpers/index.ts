import * as Yup from "yup";

export const formValues = {
    "submission{4}{first}": localStorage.getItem("submission{4}{first}") ?? "", //firstName
    "submission{4}{last}": localStorage.getItem("submission{4}{last}") ?? "",	//lastName
    "submission{5}": localStorage.getItem("submission{5}") ?? "",				//Email
    "submission{6}{area}": localStorage.getItem("submission{6}{area}") ?? "",	//AreaNumber
    "submission{6}{phone}": localStorage.getItem("submission{6}{phone}") ?? "",	//PhoneNumber
    "submission{28}": localStorage.getItem("submission{28}") ?? "", //profile
    "submission{129}": localStorage.getItem("submission{129}") ?? "", //role
    "submission{130}": localStorage.getItem("submission{130}") ?? "", //website
    "submission{34}": localStorage.getItem("submission{34}") ?? "",		//nameOf School
    "submission{39}": localStorage.getItem("submission{39}") ?? "",		//fieldOf ''
    "submission{40}": localStorage.getItem("submission{40}") ?? "",		//typeofDegree ''
    "submission{125}": localStorage.getItem("submission{125}") ?? "",		//city
    "submission{126}{day}": localStorage.getItem("submission{126}{day}") ?? "", //starting
    "submission{126}{month}": localStorage.getItem("submission{126}{month}") ?? "",
    "submission{126}{year}": localStorage.getItem("submission{126}{year}") ?? "",
    "submission{127}{day}": localStorage.getItem("submission{127}{day}") ?? "", //ending
    "submission{127}{month}": localStorage.getItem("submission{127}{month}") ?? "",
    "submission{127}{year}": localStorage.getItem("submission{127}{year}") ?? "",
    "submission{124}": localStorage.getItem("submission{124}") ?? "", //skills
    "submission{77}": localStorage.getItem("submission{77}") ?? "",	//jobTitle
    "submission{79}": localStorage.getItem("submission{79}") ?? "",   //company
    "submission{82}{day}": localStorage.getItem("submission{82}{day}") ?? "", //starting
    "submission{82}{month}": localStorage.getItem("submission{82}{month}") ?? "",
    "submission{82}{year}": localStorage.getItem("submission{82}{year}") ?? "",
    "submission{83}{day}": localStorage.getItem("submission{83}{day}") ?? "", //ending
    "submission{83}{month}": localStorage.getItem("submission{83}{month}") ?? "",
    "submission{83}{year}": localStorage.getItem("submission{83}{year}") ?? "",
    "submission{85}": localStorage.getItem("submission{85}") ?? "",  //duties
    "submission{128}": localStorage.getItem("submission{128}") ?? ""  //city

}

export const formSchema = Yup.object({});