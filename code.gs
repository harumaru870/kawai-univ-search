var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var sheet = spreadsheet.getSheetByName('sheet1');
var data = sheet.getDataRange().getValues();

function doGet() {
    return HtmlService.createHtmlOutputFromFile('index3');
}

function getSchools() {
    var schools = data.map(function(row) { return row[1]; });
  return [...new Set(schools)]; // 重複を排除
}

function getDepartments(school) {
    var departments = data.filter(function(row) { return row[1] === school; })
                        .map(function(row) { return row[2]; });
  return [...new Set(departments)]; // 重複を排除
}

function getMajors(school, department) {
    var majors = data.filter(function(row) { return row[1] === school && row[2] === department; })
                   .map(function(row) { return row[3]; });
  return [...new Set(majors)]; // 重複を排除
}

function getExamDates(school, department, major) {
    var examDates = data.filter(function(row) { return row[1] === school && row[2] === department && row[3] === major; })
                      .map(function(row) { return row[4]; });
  return [...new Set(examDates)]; // 重複を排除
}

function getID(school, department, major, examDate) {
    var id = data.find(function(row) { return row[1] === school && row[2] === department && row[3] === major && row[4] === examDate; });
  return id ? id[0] : 'IDが見つかりません'; // IDが見つかった場合はそのIDを、そうでない場合はメッセージを返す
}
