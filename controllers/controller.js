import { filename } from "../server.js";
import XLSX from "xlsx";

export default class medicalApi {
  static async fetchData(req, res) {
    const workbook = await XLSX.readFile(filename);
    const sheet_name_list = workbook.SheetNames;
   
    if (req.role == "patient") {
      console.log("patient", sheet_name_list[0]);
      const results = {
        sheetName: sheet_name_list[0],
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]),
      };
    }
    if (req.role == "physician") {
      console.log("phyiscian", sheet_name_list[1]);
      const results = {
        sheetName: sheet_name_list[1],
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]),
      };
    }
    if (req.role == "pharmacist") {
      console.log("pharmacist", sheet_name_list[2]);
      const results = {
        sheetName: sheet_name_list[2],
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]),
      };
    }
    if (req.role == "admin") {
      console.log("admin");
      const results = {
        tables: [
          {
            sheetName: sheet_name_list[0],
            data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]),
          },
          {
            sheetName: sheet_name_list[1],
            data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]),
          },
          {
            sheetName: sheet_name_list[2],
            data: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]),
          },
        ],
      };
    }
  }
}
