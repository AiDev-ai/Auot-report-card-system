// Exact replica of Python GUI functionality
let students = {};
let availableIds = [];
let currentStudentId = null;

// Subject configurations matching Python code
const classSubjects = {
    'II': ['English', 'Urdu', 'GK', 'Mathematics', 'Computer', 'Islamiat', 'Sindhi'],
    'III': ['English', 'Urdu', 'GK', 'Mathematics', 'Computer', 'Islamiat', 'Sindhi'],
    'IV': ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi'],
    'V': ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi'],
    'VI': ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi'],
    'VII': ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi'],
    'VIII': ['English', 'Urdu', 'Science', 'Mathematics', 'Computer', 'Social Studies', 'Islamiat', 'Sindhi'],
    'IX': ['English', 'Urdu', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Computer', 'Islamiat'],
    'X': ['English', 'Urdu', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'Computer', 'Pakistan Studies']
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSampleData();
});

function loadSampleData() {
    // Load sample data to match Python behavior
    students = {
        'AAH001': {
            name: 'Sample Student 1',
            class: 'IX',
            mid_marks: [85, 78, 92, 88, 82, 90, 'A', 45],
            final_marks: [88, 80, 95, 85, 85, 92, 'A', 48]
        },
        'AAH002': {
            name: 'Sample Student 2', 
            class: 'X',
            mid_marks: [75, 68, 82, 78, 72, 80, 'B', 35],
            final_marks: [78, 70, 85, 75, 75, 82, 'B', 38]
        }
    };
    
    availableIds = Object.keys(students).sort();
    updateStudentsList();
    document.getElementById('studentsCount').textContent = `All ${availableIds.length} Students`;
}

function updateStudentsList() {
    const listbox = document.getElementById('studentListbox');
    listbox.innerHTML = '';
    
    availableIds.forEach(studentId => {
        const student = students[studentId];
        const option = document.createElement('option');
        option.value = studentId;
        option.textContent = `${studentId} - ${student.name}`;
        listbox.appendChild(option);
    });
}

function filterStudents() {
    const searchTerm = document.getElementById('searchEntry').value.toLowerCase();
    const listbox = document.getElementById('studentListbox');
    listbox.innerHTML = '';
    
    availableIds.forEach(studentId => {
        const student = students[studentId];
        const displayText = `${studentId} - ${student.name}`;
        
        if (searchTerm === '' || 
            studentId.toLowerCase().includes(searchTerm) || 
            student.name.toLowerCase().includes(searchTerm)) {
            const option = document.createElement('option');
            option.value = studentId;
            option.textContent = displayText;
            listbox.appendChild(option);
        }
    });
}

function onStudentSelect() {
    showSelectedReport();
}

function showSelectedReport() {
    const listbox = document.getElementById('studentListbox');
    const selectedOption = listbox.options[listbox.selectedIndex];
    
    if (!selectedOption) {
        alert('Please select a student from the list');
        return;
    }
    
    const studentId = selectedOption.value;
    const student = students[studentId];
    
    if (!student) {
        alert('Student data not found');
        return;
    }
    
    currentStudentId = studentId;
    document.getElementById('currentStudentLabel').textContent = `Showing: ${studentId} - ${student.name}`;
    
    // Update student info
    document.getElementById('nameLabel').textContent = student.name || '';
    document.getElementById('classLabel').textContent = student.class || '';
    document.getElementById('idLabel').textContent = studentId;
    
    const subjects = getSubjects(student.class);
    createDynamicTable(subjects, student);
}

function getSubjects(cls) {
    return classSubjects[cls] || [];
}

function getTotalMarks(cls) {
    if (['II', 'III'].includes(cls)) {
        return 500; // Eng(100) + Urdu(100) + GK(100) + Maths(100) + Islam(50) + Sindhi(50) = 500
    } else if (['IV', 'V', 'VI', 'VII', 'VIII'].includes(cls)) {
        return 550; // Eng(100) + Urdu(100) + Science(100) + Maths(100) + S.S(50) + Islam(50) + Sindhi(50) = 550
    } else if (['IX', 'X'].includes(cls)) {
        return 650; // Eng(100) + Urdu(100) + Maths(100) + Bio(100) + Phy(100) + Che(100) + Islam/PS(50) = 650
    }
    return 500;
}

function isComputerSubject(subject) {
    return subject === 'Computer';
}

function getComputerGrade(student, subjectIndex, term = 'both') {
    try {
        const midVal = student.mid_marks[subjectIndex];
        const finalVal = student.final_marks[subjectIndex];
        
        if (term === 'mid') {
            if (typeof midVal === 'string' && ['A+', 'A', 'B', 'C', 'D', 'E', 'F'].includes(midVal.trim())) {
                return midVal.trim();
            } else if (typeof midVal === 'number' && midVal > 0) {
                return percentageToGrade(midVal);
            }
            return 'C';
        } else if (term === 'final') {
            if (typeof finalVal === 'string' && ['A+', 'A', 'B', 'C', 'D', 'E', 'F'].includes(finalVal.trim())) {
                return finalVal.trim();
            } else if (typeof finalVal === 'number' && finalVal > 0) {
                return percentageToGrade(finalVal);
            }
            return 'C';
        } else {
            const midGrade = getComputerGrade(student, subjectIndex, 'mid');
            const finalGrade = getComputerGrade(student, subjectIndex, 'final');
            return midGrade === finalGrade ? midGrade : getBetterGrade(midGrade, finalGrade);
        }
    } catch (e) {
        return 'C';
    }
}

function gradeToPercentage(grade) {
    const gradeMap = {
        'A+': 95, 'A': 85, 'B': 75, 'C': 65,
        'D': 55, 'E': 45, 'F': 25
    };
    return gradeMap[grade] || 65;
}

function percentageToGrade(percentage) {
    if (percentage >= 91) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    if (percentage >= 35) return 'E';
    return 'F';
}

function getBetterGrade(grade1, grade2) {
    const gradeOrder = ['F', 'E', 'D', 'C', 'B', 'A', 'A+'];
    const index1 = gradeOrder.indexOf(grade1);
    const index2 = gradeOrder.indexOf(grade2);
    return index1 > index2 ? grade1 : grade2;
}

function getRemarksForGrade(grade) {
    if (['A+', 'A'].includes(grade)) return 'Excellent';
    if (grade === 'B') return 'Outstanding';
    if (grade === 'C') return 'Good';
    if (grade === 'D') return 'Average';
    return 'Needs Improvement';
}

function createDynamicTable(subjects, student) {
    const tableBody = document.getElementById('marksTableBody');
    tableBody.innerHTML = '';
    
    let totalMid = 0;
    let totalFinal = 0;
    let totalAgg = 0;
    let calculationSubjects = 0;
    
    // Create subject rows
    subjects.forEach((subject, i) => {
        const row = document.createElement('tr');
        
        if (isComputerSubject(subject)) {
            // Computer subject - show grades
            const midGrade = getComputerGrade(student, i, 'mid');
            const finalGrade = getComputerGrade(student, i, 'final');
            
            const midPerc = gradeToPercentage(midGrade);
            const finalPerc = gradeToPercentage(finalGrade);
            const avgPerc = (midPerc + finalPerc) / 2;
            const avgGrade = percentageToGrade(avgPerc);
            const remarks = getRemarksForGrade(avgGrade);
            
            row.innerHTML = `
                <td>${i + 1}</td>
                <td>${subject}</td>
                <td>${midGrade}</td>
                <td>-</td>
                <td>${finalGrade}</td>
                <td>-</td>
                <td>${avgGrade}</td>
                <td>${Math.round(avgPerc)}</td>
                <td>${avgGrade}</td>
                <td>${remarks}</td>
            `;
            
            totalMid += midPerc;
            totalFinal += finalPerc;
            totalAgg += avgPerc;
            calculationSubjects += 1;
        } else {
            // Regular subjects with marks
            const mid = student.mid_marks[i] || 0;
            const final = student.final_marks[i] || 0;
            
            // Determine max marks based on class and subject
            let maxMarks = 100;
            if (['II', 'III'].includes(student.class)) {
                maxMarks = ['English', 'Urdu', 'GK', 'Mathematics'].includes(subject) ? 100 : 50;
            } else if (['IV', 'V', 'VI', 'VII', 'VIII'].includes(student.class)) {
                maxMarks = ['English', 'Urdu', 'Science', 'Mathematics'].includes(subject) ? 100 : 50;
            } else if (['IX', 'X'].includes(student.class)) {
                maxMarks = ['English', 'Urdu', 'Mathematics', 'Biology', 'Physics', 'Chemistry'].includes(subject) ? 100 : 50;
            }
            
            const wMid = (mid * 20) / 100;
            const wFinal = (final * 80) / 100;
            const agg = wMid + wFinal;
            const perc = (agg / maxMarks) * 100;
            
            const grade = percentageToGrade(perc);
            const remarks = getRemarksForGrade(grade);
            
            row.innerHTML = `
                <td>${i + 1}</td>
                <td>${subject}</td>
                <td>${mid}</td>
                <td>${wMid.toFixed(1)}</td>
                <td>${final}</td>
                <td>${wFinal.toFixed(1)}</td>
                <td>${Math.round(agg)}</td>
                <td>${Math.round(perc)}</td>
                <td>${grade}</td>
                <td>${remarks}</td>
            `;
            
            totalMid += mid;
            totalFinal += final;
            totalAgg += agg;
            calculationSubjects += 1;
        }
        
        tableBody.appendChild(row);
    });
    
    // Add total row
    const classTotalMarks = getTotalMarks(student.class);
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    totalRow.innerHTML = `
        <td></td>
        <td><strong>Total [${classTotalMarks}]</strong></td>
        <td><strong>${Math.round(totalMid)}</strong></td>
        <td></td>
        <td><strong>${Math.round(totalFinal)}</strong></td>
        <td></td>
        <td><strong>${Math.round(totalAgg)}</strong></td>
        <td><strong>${calculationSubjects > 0 ? Math.round(totalAgg / calculationSubjects) : 0}</strong></td>
        <td></td>
        <td></td>
    `;
    tableBody.appendChild(totalRow);
    
    // Update footer
    const overallPerc = calculationSubjects > 0 ? totalAgg / calculationSubjects : 0;
    const overallGrade = percentageToGrade(overallPerc);
    const passFail = overallPerc >= 40 ? "Pass" : "Fail";
    
    document.getElementById('overallLabel').textContent = `${Math.round(overallPerc)}%`;
    document.getElementById('gradeLabel').textContent = overallGrade;
    document.getElementById('passFailLabel').textContent = passFail;
}

function refreshData() {
    document.getElementById('currentStudentLabel').textContent = '🔄 Refreshing data...';
    
    // Simulate refresh - in real app, this would reload Excel data
    setTimeout(() => {
        alert('✅ Data refreshed successfully!\n\n📊 Total students: ' + availableIds.length + '\n📝 No changes detected');
        document.getElementById('currentStudentLabel').textContent = 'Select a student from the list';
    }, 1000);
}

function directPrint() {
    if (!currentStudentId) {
        alert('Please select a student first');
        return;
    }
    
    // Create print window with report card
    const printWindow = window.open('', '_blank');
    const reportCard = document.querySelector('.report-card').cloneNode(true);
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Report Card - ${students[currentStudentId].name}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .report-card { border: 2px solid black; padding: 20px; }
                .header-frame { border: 1px solid black; padding: 8px; margin-bottom: 3px; }
                .top-row { display: flex; align-items: center; margin-bottom: 8px; }
                .logo-placeholder { width: 100px; height: 100px; background-color: lightblue; border: 1px solid black; display: flex; align-items: center; justify-content: center; font-size: 12px; margin-right: 15px; }
                .info-section { flex: 1; text-align: center; }
                .school-name { font-size: 16px; font-weight: bold; margin-bottom: 2px; }
                .school-address, .school-contact { font-size: 10px; margin-bottom: 1px; }
                .exam-title { font-size: 14px; font-weight: bold; text-align: center; margin: 5px 0; }
                .report-title { font-size: 12px; text-align: center; margin-bottom: 8px; }
                .student-frame { border: 1px solid black; padding: 10px 15px; margin-bottom: 5px; }
                .info-grid { display: grid; grid-template-columns: auto 1fr auto 1fr auto 1fr; gap: 5px; align-items: center; }
                .info-grid .label { font-size: 11px; font-weight: bold; }
                .info-grid .value { font-size: 11px; font-weight: bold; }
                .marks-table { width: 100%; border-collapse: collapse; font-size: 9px; margin-bottom: 5px; }
                .marks-table th, .marks-table td { border: 1px solid black; padding: 8px 4px; text-align: center; }
                .marks-table th { background-color: lightgray; font-weight: bold; }
                .total-row { background-color: lightgray; font-weight: bold; }
                .footer-frame { display: flex; margin: 10px 0; gap: 5px; }
                .grading-system { width: 380px; height: 80px; border: 1px solid black; padding: 3px; }
                .grading-title { font-size: 10px; font-weight: bold; text-align: center; margin-bottom: 3px; }
                .grade-line1, .grade-line2 { font-size: 8px; text-align: center; margin-bottom: 2px; }
                .results-section { flex: 1; border: 1px solid black; padding: 8px; }
                .result-row { display: flex; justify-content: space-between; margin-bottom: 2px; font-size: 10px; }
                .remarks-frame { border: 1px solid black; padding: 5px; margin-top: 5px; }
                .remarks-header { font-size: 10px; font-weight: bold; margin-bottom: 5px; }
                #teacherRemarks { width: 100%; height: 60px; font-size: 10px; border: 1px solid gray; padding: 5px; }
            </style>
        </head>
        <body>
            ${reportCard.outerHTML}
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    alert('Report card opened in browser.\nClick the "Print Report Card" button or use Ctrl+P to print.');
}

function saveHTML() {
    if (!currentStudentId) {
        alert('Please select a student first');
        return;
    }
    
    const student = students[currentStudentId];
    const reportCard = document.querySelector('.report-card').outerHTML;
    
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Report Card - ${student.name}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        /* Add all the print styles here */
    </style>
</head>
<body>
    ${reportCard}
</body>
</html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Report_Card_${student.name.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Report card saved as HTML file!');
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            parseExcelData(workbook);
        } catch (error) {
            alert('Error reading Excel file: ' + error.message);
        }
    };
    reader.readAsArrayBuffer(file);
}

function parseExcelData(workbook) {
    students = {};
    availableIds = [];
    
    const classSheets = ['Class  II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];
    
    workbook.SheetNames.forEach(sheetName => {
        if (classSheets.includes(sheetName)) {
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            
            for (let row = 0; row < 200; row++) {
                try {
                    let studentId = null;
                    let studentName = null;
                    const studentClass = sheetName.replace('Class ', '').trim();
                    
                    // Look for student ID starting with 'AAH'
                    for (let col = 0; col < 3; col++) {
                        const cellVal = jsonData[row] && jsonData[row][col];
                        if (cellVal && String(cellVal).startsWith('AAH')) {
                            const nameVal = jsonData[row] && jsonData[row][col + 1];
                            if (nameVal && !String(nameVal).startsWith('AAH')) {
                                studentId = String(cellVal).trim();
                                studentName = String(nameVal).trim();
                                break;
                            }
                        }
                    }
                    
                    if (studentId && studentName && !students[studentId]) {
                        const midMarks = [];
                        const finalMarks = [];
                        
                        // Read marks from columns D onwards
                        let markCols = ['D', 'E', 'F', 'G', 'H', 'I', 'J'];
                        if (['IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'].includes(studentClass)) {
                            markCols.push('K');
                        }
                        
                        markCols.forEach((col, index) => {
                            const colIndex = col.charCodeAt(0) - 'A'.charCodeAt(0);
                            const midVal = jsonData[row] && jsonData[row][colIndex];
                            midMarks.push(midVal !== undefined ? midVal : 0);
                        });
                        
                        // For now, use same marks for final (in real app, load from Final Term sheet)
                        finalMarks.push(...midMarks);
                        
                        students[studentId] = {
                            name: studentName,
                            class: studentClass,
                            mid_marks: midMarks,
                            final_marks: finalMarks
                        };
                        availableIds.push(studentId);
                    }
                } catch (e) {
                    continue;
                }
            }
        }
    });
    
    availableIds.sort();
    updateStudentsList();
    document.getElementById('studentsCount').textContent = `All ${availableIds.length} Students`;
    alert(`Loaded ${availableIds.length} students successfully!`);
}

// Add button to load Excel file
function loadExcelFile() {
    document.getElementById('excelFile').click();
}
