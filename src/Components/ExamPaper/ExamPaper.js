/* eslint-disable react/jsx-no-undef */
import React from 'react';
import MathJax from 'react-mathjax-preview';

// exam paper js

class ExamPaper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
			showQuestionNo:1
        }
		this.handleClick = this.handleClick.bind(this)
    }

	

	

	static get sampleJSON() {
        return {
            "examschedule_id" : 2798,
		"duration" : 60,
		"questioncount" : 60,
		"examtypeid" : 38,
		"examname" : "SCORE- CLASS 7- SET-1",
		"examtype" : "SCORER VI - X",
		"startime" : "Sat Feb 20 18:00:00 IST 2021",
		"endtime" : "Mon May 31 23:55:00 IST 2021",
		"gracetime" : "Mon May 31 23:55:00 IST 2021",
		"resultdatetime" : "Mon May 31 23:55:00 IST 2021",
		"verified" : false,
		"result" : false,
		"subjects" : [ {
		  "subject" : 3311,
		  "subjectname" : "MATHEMATICS",
		  "questions" : [ {
			"questionid" : 635302,
			"sno" : 1,
			"questiontext" : "The sum of three numbers is 98. If the ratio of the  first to the second is 2 : 3 and that of the second to the third is 5 : 8  then the second number is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Ratio and Proportions/Ratio and Proportions",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635302/10.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068006000,
			"updatedon" : 1569068006000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029597,
			  "choicetext" : "    20  "
			}, {
			  "choiceid" : 3029598,
			  "choicetext" : "    30  "
			}, {
			  "choiceid" : 3029599,
			  "choicetext" : "    48  "
			}, {
			  "choiceid" : 3029600,
			  "choicetext" : "    58  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    30  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635304,
			"sno" : 2,
			"questiontext" : "A  boy reads <math><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac></mrow></math><xml>     </xml> of a book and  60 pages are left.  Find the total  number of pages in the book.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Fractions, Decimals and Rational Numbers/Fractions, Decimals and Rational Numbers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635304/11.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569068034000,
			"updatedon" : 1569141725000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3032169,
			  "choicetext" : "    120  "
			}, {
			  "choiceid" : 3032170,
			  "choicetext" : "    150  "
			}, {
			  "choiceid" : 3032171,
			  "choicetext" : "    100  "
			}, {
			  "choiceid" : 3032172,
			  "choicetext" : "    510  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    150  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635307,
			"sno" : 3,
			"questiontext" : "In the given figure, <math><mrow><mover><mrow><mi>P</mi><mi>Q</mi></mrow><mo>¯</mo></mover><mo>⊥</mo><mover><mrow><mi>P</mi><mi>S</mi></mrow><mo>¯</mo></mover><mtext> </mtext><mi>a</mi><mi>n</mi><mi>d</mi><mtext> </mtext><mover><mrow><mi>P</mi><mi>Q</mi></mrow><mo>¯</mo></mover><mtext> </mtext><mo>|</mo><mo>|</mo><mtext> </mtext><mtext> </mtext><mover><mrow><mi>S</mi><mi>R</mi></mrow><mo>¯</mo></mover></mrow></math><xml>     </xml>then the value of <math><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math><xml>     </xml> is  <p><img width='199' height='76' src='/attachment/1569068055029-image003.gif'></img><xml>     </xml></p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Lines and Angles/Lines and Angles",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635307/12.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068055000,
			"updatedon" : 1569068055000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029621,
			  "choicetext" : "    <math><mrow><mn>37</mn><mo>°</mo></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029622,
			  "choicetext" : "    <math><mrow><mn>53</mn><mo>°</mo></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029623,
			  "choicetext" : "    <math><mrow><mn>16</mn><mo>°</mo></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029624,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>16</mn><mo>°</mo></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mo>−</mo><mn>16</mn><mo>°</mo></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635310,
			"sno" : 4,
			"questiontext" : "The end points of a line segment, a ray and a line  respectively are",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Lines and Angles/Lines and Angles",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635310/13.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068082000,
			"updatedon" : 1569068082000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029633,
			  "choicetext" : "    0, 1, 2  "
			}, {
			  "choiceid" : 3029634,
			  "choicetext" : "    1, 2, 0  "
			}, {
			  "choiceid" : 3029635,
			  "choicetext" : "    2, 1, 0  "
			}, {
			  "choiceid" : 3029636,
			  "choicetext" : "    0, 2, 1  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    2, 1, 0  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635328,
			"sno" : 5,
			"questiontext" : "In the adjacent figure AB || CD and <math><mrow><mover><mrow><mi>B</mi><mi>C</mi></mrow><mo>¯</mo></mover><mo>|</mo><mo>|</mo><mover><mrow><mi>D</mi><mi>E</mi></mrow><mo>¯</mo></mover></mrow></math><xml>     </xml> then find the value p,  q is  <p><img width='368' height='133' src='/attachment/1569585636814-image002.gif'></img><xml>     </xml></p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Lines and Angles/Lines and Angles",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635328/14.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068240000,
			"updatedon" : 1569585636000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3073023,
			  "choicetext" : "    P = 51°, q = 35°  "
			}, {
			  "choiceid" : 3073024,
			  "choicetext" : "    P = 105°, q = 35°  "
			}, {
			  "choiceid" : 3073025,
			  "choicetext" : "    P = 35°, q = 51°  "
			}, {
			  "choiceid" : 3073026,
			  "choicetext" : "    P = 35°, q = 105°  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    P = 35°, q = 51°  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635345,
			"sno" : 6,
			"questiontext" : "Find the value of ‘x’ for which the expression <math><mrow><mi>x</mi><mo>−</mo><mn>15</mn><mtext> </mtext><mi>a</mi><mi>n</mi><mi>d</mi><mtext> </mtext><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math><xml>     </xml> become equal.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Introduction to Algebra/Introduction to Algebra",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635345/15.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068388000,
			"updatedon" : 1569068645000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029869,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>16</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029870,
			  "choicetext" : "    16  "
			}, {
			  "choiceid" : 3029871,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>14</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029872,
			  "choicetext" : "    14  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mo>−</mo><mn>16</mn></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635375,
			"sno" : 7,
			"questiontext" : "<math><mrow><mn>150</mn><mtext> </mtext><mi>k</mi><mi>g</mi></mrow></math><xml>     </xml> of oil can be filled  in 10 containers. To fill <math><mrow><mn>750</mn><mtext> </mtext><mi>k</mi><mi>g</mi></mrow></math><xml>     </xml>of  oil, how many  containers will be required <math><mo>?</mo></math><xml>     </xml>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Ratio and Proportions/Ratio and Proportions",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635375/16.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068710000,
			"updatedon" : 1569068710000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029889,
			  "choicetext" : "    10  "
			}, {
			  "choiceid" : 3029890,
			  "choicetext" : "    20  "
			}, {
			  "choiceid" : 3029891,
			  "choicetext" : "    40  "
			}, {
			  "choiceid" : 3029892,
			  "choicetext" : "    50  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    50  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635277,
			"sno" : 8,
			"questiontext" : "The last digit of the sum <math><mrow><msup><mrow><mn>2002</mn></mrow><mrow><mn>2005</mn></mrow></msup><mo>+</mo><msup><mrow><mn>2003</mn></mrow><mrow><mn>2006</mn></mrow></msup><mo>+</mo><msup><mrow><mn>2007</mn></mrow><mrow><mn>2007</mn></mrow></msup></mrow></math><xml>     </xml> is ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Playing with Numbers/Playing with Numbers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635277/3.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569067787000,
			"updatedon" : 1569067787000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029469,
			  "choicetext" : "    3  "
			}, {
			  "choiceid" : 3029470,
			  "choicetext" : "    5  "
			}, {
			  "choiceid" : 3029471,
			  "choicetext" : "    6  "
			}, {
			  "choiceid" : 3029472,
			  "choicetext" : "    4  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    4  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635281,
			"sno" : 9,
			"questiontext" : "Which of the following are co-primes",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Playing with Numbers/Playing with Numbers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635281/4.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569067829000,
			"updatedon" : 1569067830000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029489,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mn>4</mn><mo>,</mo><mtext> </mtext><mn>8</mn></mrow><mo>)</mo></mrow></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029490,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mn>3</mn><mo>,</mo><mtext> </mtext><mn>8</mn></mrow><mo>)</mo></mrow></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029491,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mn>16</mn><mo>,</mo><mtext> </mtext><mn>32</mn></mrow><mo>)</mo></mrow></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029492,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mn>4</mn><mo>,</mo><mn>20</mn></mrow><mo>)</mo></mrow></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mrow><mo>(</mo><mrow><mn>3</mn><mo>,</mo><mtext> </mtext><mn>8</mn></mrow><mo>)</mo></mrow></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635284,
			"sno" : 10,
			"questiontext" : "Find  the product of the first three positive integers and the first three negative  integers.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Integers/Integers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635284/5.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569067866000,
			"updatedon" : 1569067866000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029509,
			  "choicetext" : "    <b style='mso-bidi-font-weight:normal'><math><mrow><mo>−</mo><mn>32</mn></mrow></math><xml>     </xml></b><b style='mso-bidi-font-weight:normal'></b>  "
			}, {
			  "choiceid" : 3029510,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>34</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029511,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>36</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029512,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>38</mn></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mo>−</mo><mn>36</mn></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635289,
			"sno" : 11,
			"questiontext" : " if <math><mrow><mi>a</mi><mtext> </mtext><mo>÷</mo><mtext> </mtext><mi>x</mi><mtext> </mtext><mo>=</mo><mtext> </mtext><mi>a</mi></mrow></math><xml>     </xml>,then x ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Integers/Integers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635289/6.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569067912000,
			"updatedon" : 1569067912000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029537,
			  "choicetext" : "    1  "
			}, {
			  "choiceid" : 3029538,
			  "choicetext" : "    unity  "
			}, {
			  "choiceid" : 3029539,
			  "choicetext" : "    multiplicative  identity  "
			}, {
			  "choiceid" : 3029540,
			  "choicetext" : "    all  of the above  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    by  concept  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635291,
			"sno" : 12,
			"questiontext" : "Complementary angles are always ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Lines and Angles/Lines and Angles",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635291/7.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569067935000,
			"updatedon" : 1569067935000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029545,
			  "choicetext" : "    Right angles   "
			}, {
			  "choiceid" : 3029546,
			  "choicetext" : "    Acute angles  "
			}, {
			  "choiceid" : 3029547,
			  "choicetext" : "    Obtuse angles   "
			}, {
			  "choiceid" : 3029548,
			  "choicetext" : "    Can’t say  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Acute angles   ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635294,
			"sno" : 13,
			"questiontext" : "Which number is divisibility by <math><mrow><mo>'</mo><mn>3</mn><mo>'</mo></mrow></math><xml>     </xml> is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Playing with Numbers/Playing with Numbers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635294/8.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569067958000,
			"updatedon" : 1569067958000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029561,
			  "choicetext" : "    <math><mrow><mn>452</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029562,
			  "choicetext" : "    <math><mrow><mn>953</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029563,
			  "choicetext" : "    <math><mrow><mn>36129</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029564,
			  "choicetext" : "    <math><mrow><mn>45986</mn></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mn>36129</mn></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635298,
			"sno" : 14,
			"questiontext" : "The  sum of the successor of <math><mrow><mo>−</mo><mn>390</mn></mrow></math><xml>     </xml> and the  predecessor of <math><mrow><mo>−</mo><mn>119</mn></mrow></math><xml>     </xml>is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Integers/Integers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635298/9.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569067980000,
			"updatedon" : 1569067980000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029577,
			  "choicetext" : "    <b style='mso-bidi-font-weight:normal'><math><mrow><mo>−</mo><mn>507</mn></mrow></math><xml>     </xml></b><b style='mso-bidi-font-weight:normal'></b>  "
			}, {
			  "choiceid" : 3029578,
			  "choicetext" : "    <math><mrow><mn>508</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029579,
			  "choicetext" : "    <math><mrow><mn>509</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029580,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>509</mn></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mo>−</mo><mn>509</mn></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635402,
			"sno" : 15,
			"questiontext" : "Harita wants to put a lace border all around a  rectangle table cover <math><mrow><mn>2</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml> long and <math><mrow><mn>1</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>wide. Find the length of the lace required by Harita. ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Perimeater and Area/Perimeater and Area",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635402/26.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569068972000,
			"updatedon" : 1569068972000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3029993,
			  "choicetext" : "    <math><mrow><mn>3</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029994,
			  "choicetext" : "    <math><mrow><mn>4</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029995,
			  "choicetext" : "    <math><mrow><mn>5</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3029996,
			  "choicetext" : "    <math><mrow><mn>6</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mn>6</mn><mtext> </mtext><mi>m</mi></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635405,
			"sno" : 16,
			"questiontext" : "Which of the following statement is false <math><mo>?</mo></math><xml>     </xml>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Integers/Integers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635405/27.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569069006000,
			"updatedon" : 1569069006000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3030005,
			  "choicetext" : "    Zero is neither a negative integer nor a positive  integer.  "
			}, {
			  "choiceid" : 3030006,
			  "choicetext" : "    Zero is less than every positive integer.  "
			}, {
			  "choiceid" : 3030007,
			  "choicetext" : "    Zero is larger than every negative integer.  "
			}, {
			  "choiceid" : 3030008,
			  "choicetext" : "    Farther a number from zero on the left, larger is its  value.  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Farther a number from zero on the left, larger is its  value  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635406,
			"sno" : 17,
			"questiontext" : "The predecessor of the product of first four negative  integers is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Integers/Integers",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635406/28.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569069027000,
			"updatedon" : 1569222389000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3035793,
			  "choicetext" : "    23  "
			}, {
			  "choiceid" : 3035794,
			  "choicetext" : "    24  "
			}, {
			  "choiceid" : 3035795,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>23</mn></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3035796,
			  "choicetext" : "    <math><mrow><mo>−</mo><mn>24</mn></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    23  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635408,
			"sno" : 18,
			"questiontext" : "How many diagonals are there in the following figure <math><mo>?</mo></math><xml>     </xml>  <p><img width='86' height='93' src='/attachment/1569069045542-image002.gif'></img><xml>     </xml></p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Basic Geometrical Ideas/Basic Geometrical Ideas",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635408/29.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569069045000,
			"updatedon" : 1569069045000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3030021,
			  "choicetext" : "    4  "
			}, {
			  "choiceid" : 3030022,
			  "choicetext" : "    5  "
			}, {
			  "choiceid" : 3030023,
			  "choicetext" : "    2  "
			}, {
			  "choiceid" : 3030024,
			  "choicetext" : "    3  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    5  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635410,
			"sno" : 19,
			"questiontext" : "The rule which gives the number of matchsticks  required to made the matchstick pattern <math><mi>T</mi></math><xml>     </xml>is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Introduction to Algebra/Introduction to Algebra",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635410/30.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569069068000,
			"updatedon" : 1569069068000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3030029,
			  "choicetext" : "    <math><mrow><mn>2</mn><mtext> </mtext><mi>n</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3030030,
			  "choicetext" : "    <math><mrow><mn>3</mn><mtext> </mtext><mi>n</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3030031,
			  "choicetext" : "    <math><mrow><mn>4</mn><mtext> </mtext><mi>n</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3030032,
			  "choicetext" : "    <math><mrow><mn>5</mn><mi>n</mi></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mn>2</mn><mtext> </mtext><mi>n</mi></mrow></math><xml>     </xml>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635255,
			"sno" : 20,
			"questiontext" : "If  <math><mrow><mfrac><mi>x</mi><mi>a</mi></mfrac><mo>+</mo><mi>b</mi><mo>=</mo><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mi>a</mi></mrow></math><xml>     </xml> then the value of <math><mi>x</mi></math><xml>     </xml> is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "MATHEMATICS/OLYMPIAD/Simple Equations/Simple Equations",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635255/1.doc",
			"keywords" : "7TH280919",
			"createdon" : 1569067049000,
			"updatedon" : 1569217227000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3035181,
			  "choicetext" : "    <math><mrow><mfrac><mi>a</mi><mi>b</mi></mfrac></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3035182,
			  "choicetext" : "    <math><mrow><mo>−</mo><mi>a</mi><mtext> </mtext><mi>b</mi></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3035183,
			  "choicetext" : "    <math><mrow><mfrac><mrow><msup><mi>a</mi><mn>2</mn></msup><mi>b</mi><mo>−</mo><mi>a</mi><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mi>b</mi><mo>−</mo><mi>a</mi></mrow></mfrac></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3035184,
			  "choicetext" : "    Both B,C  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    By concept  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  } ]
		}, {
		  "subject" : 3312,
		  "subjectname" : "PHYSICS",
		  "questions" : [ {
			"questionid" : 634954,
			"sno" : 21,
			"questiontext" : "Vijay  puts some water into four cups made of steel, porcelain, glass, frosted glass  respectively. Which one of these cups will allow him to see the level of the  water clearly?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Light, Shadows and images/Light, Shadows and images",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "634954/1.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062368000,
			"updatedon" : 1609134316000,
			"questionstatus" : "Approved",
			"choicesperline" : 2,
			"questionchoices" : [ {
			  "choiceid" : 3695578,
			  "choicetext" : "    Glass  cup  "
			}, {
			  "choiceid" : 3695579,
			  "choicetext" : "    Steel  cup  "
			}, {
			  "choiceid" : 3695580,
			  "choicetext" : "    Porcelain  cup  "
			}, {
			  "choiceid" : 3695581,
			  "choicetext" : "    Frosted  glass cup  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Thin  glass is transparent substance  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 634966,
			"sno" : 22,
			"questiontext" : "If  the size of the pinhole camera is increase then ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Light, Shadows and images/Light, Shadows and images",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "634966/4.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062532000,
			"updatedon" : 1609135529000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3695778,
			  "choicetext" : "    Image  will be clear  "
			}, {
			  "choiceid" : 3695779,
			  "choicetext" : "    Sharpness  of the image decrease    "
			}, {
			  "choiceid" : 3695780,
			  "choicetext" : "    Different  color images will form as clear  "
			}, {
			  "choiceid" : 3695781,
			  "choicetext" : "    All  the above  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Sharpness  of the image decreases, because of more light from the object enters through  pin hole and disturbs the formation image.     ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 634972,
			"sno" : 23,
			"questiontext" : "A  fuse wire should have ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Electricity/Electricity",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "634972/7.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062610000,
			"updatedon" : 1604985366000,
			"questionstatus" : "Approved",
			"choicesperline" : 2,
			"questionchoices" : [ {
			  "choiceid" : 3641456,
			  "choicetext" : "    Low  melting point  "
			}, {
			  "choiceid" : 3641457,
			  "choicetext" : "    High  melting point  "
			}, {
			  "choiceid" : 3641458,
			  "choicetext" : "    Very  high melting point  "
			}, {
			  "choiceid" : 3641459,
			  "choicetext" : "    None  of these  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Low  melting point. So that it breaks on high current due to more heat. Thus saves  the appalience  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 634981,
			"sno" : 24,
			"questiontext" : "Observe  the given figure and identify the correct statements.  <p><img width='239' height='49' src='/attachment/1613204305181-image001.gif'></img><xml>     </xml></p>  <p>i)  Poles 1, 3 and 5 are unlike poles.  </p>  <p>ii)  Poles 2, 4 and 6 are like poles.</p>  <p>iii)  Pole 1 will attract pole 3 and 5.   </p>  <p>iv)  Pole 4 will be attracted by pole 1.</p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Playing with Magnets/Playing with Magnets",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "634981/10-2.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062726000,
			"updatedon" : 1613204305000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3797828,
			  "choicetext" : "    (i)  and (iii) only  "
			}, {
			  "choiceid" : 3797829,
			  "choicetext" : "    (ii)  and (iv) only  "
			}, {
			  "choiceid" : 3797830,
			  "choicetext" : "    (i)  and (ii) only  "
			}, {
			  "choiceid" : 3797831,
			  "choicetext" : "    (iii)  and (iv) only  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    According  to Pole property, If 1 is North pole then 3,5 also North poles. If 1 is South  pole then 3,5 are also South poles . As unlike poles attract each other 1  And  4 attract each other.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 634986,
			"sno" : 25,
			"questiontext" : "The  correct expression to convert temperature from ºC to ºF is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Heat and measurement/Heat and measurement",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "634986/3.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062811000,
			"updatedon" : 1612602627000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3780052,
			  "choicetext" : "    <math><mrow><mfrac><mrow><mi>C</mi><mo>−</mo><mn>32</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mfrac><mi>F</mi><mn>5</mn></mfrac></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3780053,
			  "choicetext" : "    <math><mrow><mfrac><mi>C</mi><mn>9</mn></mfrac><mo>=</mo><mfrac><mrow><mi>F</mi><mo>−</mo><mn>32</mn></mrow><mn>5</mn></mfrac></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3780054,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mi>F</mi><mo>−</mo><mn>32</mn></mrow><mo>)</mo></mrow><mo>=</mo><mfrac><mrow><mn>9</mn><mi>C</mi></mrow><mn>5</mn></mfrac></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3780055,
			  "choicetext" : "    <math><mrow><mrow><mo>(</mo><mrow><mi>C</mi><mo>−</mo><mn>32</mn></mrow><mo>)</mo></mrow><mo>=</mo><mfrac><mrow><mn>5</mn><mi>F</mi></mrow><mn>9</mn></mfrac></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mfrac><mrow><mi>F</mi><mo>−</mo><mn>32</mn></mrow><mrow><mn>180</mn></mrow></mfrac><mo>=</mo><mfrac><mi>C</mi><mrow><mn>100</mn></mrow></mfrac></mrow></math><xml>     </xml>  <p><math><mrow><mfrac><mrow><mi>F</mi><mo>−</mo><mn>32</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mfrac><mi>C</mi><mn>5</mn></mfrac></mrow></math><xml>     </xml></p>  <p><math><mrow><mrow><mo>(</mo><mrow><mi>F</mi><mo>−</mo><mn>32</mn></mrow><mo>)</mo></mrow><mo>=</mo><mfrac><mrow><mn>9</mn><mi>C</mi></mrow><mn>5</mn></mfrac></mrow></math><xml>     </xml></p>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 634993,
			"sno" : 26,
			"questiontext" : "Which  one of the following is an example of uniform motion?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Motion and Time/Motion and Time",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "634993/16.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062886000,
			"updatedon" : 1606113211000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3644600,
			  "choicetext" : "    A  car is moving on road having traffic.  "
			}, {
			  "choiceid" : 3644601,
			  "choicetext" : "    A  train entering a railway station.  "
			}, {
			  "choiceid" : 3644602,
			  "choicetext" : "    Motion  of a butterfly.  "
			}, {
			  "choiceid" : 3644603,
			  "choicetext" : "    An  aeroplane flying at a speed of <math><mrow><mn>750</mn><mtext> </mtext><mi>k</mi><mi>m</mi><mtext> </mtext><msup><mi>h</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math><xml>     </xml>towards  north.  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Speed  and direction of particle is same at every instant. The particle moves with  uniform motion  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635003,
			"sno" : 27,
			"questiontext" : "Density  of iron is <math><mrow><mn>8.5</mn><mtext> </mtext><mi>g</mi><mtext> </mtext><mi>c</mi><msup><mi>m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math><xml>     </xml>,  then its density in SI system is",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L2(TECHNO CBATCH MEDICON MPL IPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Learning how to measure/Learning how to measure",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "635003/2.docx",
			"keywords" : "7TH280919",
			"createdon" : 1569062985000,
			"updatedon" : 1608545451000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3684067,
			  "choicetext" : "    <math><mrow><mn>8500</mn><mtext> </mtext><mi>k</mi><mi>g</mi><mtext> </mtext><msup><mi>m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3684068,
			  "choicetext" : "    <math><mrow><mn>850</mn><mtext> </mtext><mi>k</mi><mi>g</mi><mtext> </mtext><msup><mi>m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3684069,
			  "choicetext" : "    <math><mrow><mn>8.5</mn><mtext> </mtext><mi>k</mi><mi>g</mi><mtext> </mtext><msup><mi>m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3684070,
			  "choicetext" : "    <math><mrow><mn>85</mn><mtext> </mtext><mi>k</mi><mi>g</mi><mtext> </mtext><msup><mi>m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mn>1</mn><mtext> </mtext><mi>g</mi><mo>/</mo><mi>c</mi><msup><mi>m</mi><mn>3</mn></msup><mo>=</mo><msup><mrow><mn>10</mn></mrow><mn>3</mn></msup><mi>k</mi><mi>g</mi><mo>/</mo><msup><mi>m</mi><mn>3</mn></msup></mrow></math><xml>     </xml>  <p><math><mrow><mo>∴</mo><mtext> </mtext><mtext> </mtext><mn>8.5</mn><mi>g</mi><mo>/</mo><mi>c</mi><msup><mi>m</mi><mn>3</mn></msup><mo>=</mo><mn>8.5</mn><mo>×</mo><msup><mrow><mn>10</mn></mrow><mn>3</mn></msup><mi>k</mi><mi>g</mi><mo>/</mo><msup><mi>m</mi><mn>3</mn></msup></mrow></math><xml>     </xml></p>  <p><math><mrow><mo>=</mo><mn>8500</mn><mtext> </mtext><mi>k</mi><mi>g</mi><mtext> </mtext><mo>/</mo><msup><mi>m</mi><mn>3</mn></msup></mrow></math><xml>     </xml></p>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635026,
			"sno" : 28,
			"questiontext" : "There  is no dark shadow formed by the glass when light incident on it. This is  because  <p><img width='254' height='113' src='/attachment/1609136130839-image001.jpg'></img></p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Light, Shadows and images/Light, Shadows and images",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "635026/6.docx",
			"keywords" : "7TH290919",
			"createdon" : 1569063352000,
			"updatedon" : 1609136130000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3695814,
			  "choicetext" : "    It  is not night time yet.  "
			}, {
			  "choiceid" : 3695815,
			  "choicetext" : "    The  light is not strong enough.  "
			}, {
			  "choiceid" : 3695816,
			  "choicetext" : "    The  glass is a transparent object.             "
			}, {
			  "choiceid" : 3695817,
			  "choicetext" : "    The  distance between glass and screen is very large.  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    As  the glass is transparent substance the total pass through it and forms a  shadow of less darkness  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635031,
			"sno" : 29,
			"questiontext" : "Which  of the following statements are correct?  <p>i)  Human body is a good conductor of electricity.</p>  <p>ii)  The air gap surrounding an electric circuit acts as a conductor.</p>  <p>iii)  Silver conducts electricity better than any other metal.</p>  <p>iv)  When electricity lights up a bulb, no heat is produced. </p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Electricity/Electricity",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635031/5-3.docx",
			"keywords" : "7TH290919",
			"createdon" : 1569063419000,
			"updatedon" : 1610001104000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3721439,
			  "choicetext" : "    (i)  and (ii)  "
			}, {
			  "choiceid" : 3721440,
			  "choicetext" : "    (iii)  and (iv)  "
			}, {
			  "choiceid" : 3721441,
			  "choicetext" : "    (i)  and (iii)  "
			}, {
			  "choiceid" : 3721442,
			  "choicetext" : "    (ii)  and (iii)  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    By  conceptual   ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635036,
			"sno" : 30,
			"questiontext" : "Identify  the correct statements  <p> (A) : The device used to close (or) open an  electric circuit is switch                      </p>  <p>(B)  : In series circuit the electricity has only one path.</p>  <p>(C)  : Safety device used in electric circuit is fuse </p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Simple Electric Circuits/Simple Electric Circuits",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "635036/3.docx",
			"keywords" : "Circuit",
			"createdon" : 1569063537000,
			"updatedon" : 1610098484000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3724551,
			  "choicetext" : "    A,  B, C are true  "
			}, {
			  "choiceid" : 3724552,
			  "choicetext" : "    Only  A, B are true  "
			}, {
			  "choiceid" : 3724553,
			  "choicetext" : "    Only  A, C are true  "
			}, {
			  "choiceid" : 3724554,
			  "choicetext" : "    None  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    All  are true statements  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635041,
			"sno" : 31,
			"questiontext" : "Two  bar magnets suspended by string, are separated by a piece of metal.  Which of the following statements best  explain the outcome shown in the diagram?  <p><img width='230' height='147' src='/attachment/1613204347598-image001.gif'></img><xml>     </xml></p>",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Playing with Magnets/Playing with Magnets",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635041/11-2.docx",
			"keywords" : "7TH290919",
			"createdon" : 1569063629000,
			"updatedon" : 1613204347000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3797832,
			  "choicetext" : "    Only  like poles attract  "
			}, {
			  "choiceid" : 3797833,
			  "choicetext" : "    The  magnets have lost their magnetic forces.  "
			}, {
			  "choiceid" : 3797834,
			  "choicetext" : "    The  metal exerts a magnetic field which attracts the magnets.  "
			}, {
			  "choiceid" : 3797835,
			  "choicetext" : "    The  magnetic field of the magnets cannot pass through the metal.  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    The  magnetic field of the magnets is not passing through the metal. Otherwise the  two magnets would have repel each other.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635044,
			"sno" : 32,
			"questiontext" : "Among  the following devices, which cannot work based on heating effects of electric  current",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Heat and measurement/Heat and measurement",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635044/6.docx",
			"keywords" : "7TH290919",
			"createdon" : 1569063717000,
			"updatedon" : 1612603123000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3780112,
			  "choicetext" : "    radio  "
			}, {
			  "choiceid" : 3780113,
			  "choicetext" : "    geyser  "
			}, {
			  "choiceid" : 3780114,
			  "choicetext" : "    fuse  "
			}, {
			  "choiceid" : 3780115,
			  "choicetext" : "    electric  heater  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    When  electric current passes through the geyser, fuse, electric heater more amount  of heat energy produces these  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635047,
			"sno" : 33,
			"questiontext" : "A  train leaves a station X at 5:00 pm and reaches to another station Y at  midnight.  Its speed is<math><mrow><mn>90</mn><mtext> </mtext><mi>k</mi><mi>m</mi><msup><mi>h</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math><xml>     </xml>.  What is the distance between X and Y?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Motion and Time/Motion and Time",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635047/17-1.docx",
			"keywords" : "7TH290919",
			"createdon" : 1569063790000,
			"updatedon" : 1606113715000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3644620,
			  "choicetext" : "    480  km  "
			}, {
			  "choiceid" : 3644621,
			  "choicetext" : "    630  km  "
			}, {
			  "choiceid" : 3644622,
			  "choicetext" : "    800  km  "
			}, {
			  "choiceid" : 3644623,
			  "choicetext" : "    830  km  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    <math><mrow><mtext>distance</mtext><mo>=</mo><mi>s</mi><mi>p</mi><mi>e</mi><mi>e</mi><mi>d</mi><mo>×</mo><mi>t</mi><mi>i</mi><mi>m</mi><mi>e</mi></mrow></math><xml>     </xml>  <p><math><mrow><mo>=</mo><mn>90</mn><mo>×</mo><mn>7</mn></mrow></math><xml>     </xml></p>  <p><math><mrow><mo>=</mo><mn>630</mn><mtext> </mtext><mi>k</mi><mi>m</mi></mrow></math><xml>     </xml></p>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 638224,
			"sno" : 34,
			"questiontext" : "What  factors can cause cyclones",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Air, wind and cyclones/Air, wind and cyclones",
			"referencebook" : "8T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "8TH_CLASS",
			"docpath" : "638224/12-1.docx",
			"keywords" : "8TH041019",
			"createdon" : 1569316846000,
			"updatedon" : 1609584258000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3710883,
			  "choicetext" : "    Low  – speed, winds and air pressure difference  "
			}, {
			  "choiceid" : 3710884,
			  "choicetext" : "    High  – speed winds  "
			}, {
			  "choiceid" : 3710885,
			  "choicetext" : "    High  – speed winds and air pressure difference  "
			}, {
			  "choiceid" : 3710886,
			  "choicetext" : "    Air  pressure difference  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Cyclones  are centred on areas of low atmospheric pressure usually over warm ocean  waters near the equator  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 649333,
			"sno" : 35,
			"questiontext" : "The wind speed during the second cyclone that hit  Orissa during the year 1999 on 29<sup>th</sup> October",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L2(TECHNO CBATCH MEDICON MPL IPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "PHYSICS/OLYMPIAD/Air, wind and cyclones/Air, wind and cyclones",
			"referencebook" : "8T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "8TH_CLASS",
			"docpath" : "649333/17.docx",
			"keywords" : "8TH161119",
			"createdon" : 1571285772000,
			"updatedon" : 1609584628000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3710915,
			  "choicetext" : "    260 km/hr  "
			}, {
			  "choiceid" : 3710916,
			  "choicetext" : "    150 km/hr  "
			}, {
			  "choiceid" : 3710917,
			  "choicetext" : "    200 km/hr  "
			}, {
			  "choiceid" : 3710918,
			  "choicetext" : "    100 km/hr  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    The  estimated maximum wind speed reached 260 – 170 kmph in the core area which  produced a huge storm surge that led to se – level elevation of more than 20  feet.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  } ]
		}, {
		  "subject" : 3313,
		  "subjectname" : "CHEMISTRY",
		  "questions" : [ {
			"questionid" : 635583,
			"sno" : 36,
			"questiontext" : "What will be the reaction when acid dissolves in water:",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Acids, Bases and Salts/Acids, Bases and Salts",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635583/1.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569072071000,
			"updatedon" : 1613122470000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795224,
			  "choicetext" : "    Endothermic  "
			}, {
			  "choiceid" : 3795225,
			  "choicetext" : "    Exothermic  "
			}, {
			  "choiceid" : 3795226,
			  "choicetext" : "    Substitution  "
			}, {
			  "choiceid" : 3795227,
			  "choicetext" : "    Addition  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Exothermic , because heat is liberated.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635788,
			"sno" : 37,
			"questiontext" : "What does Arrhenius ionic theory states:",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Acids, Bases and Salts/Acids, Bases and Salts",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635788/2.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569134548000,
			"updatedon" : 1613127538000,
			"questionstatus" : "Approved",
			"choicesperline" : 1,
			"questionchoices" : [ {
			  "choiceid" : 3796048,
			  "choicetext" : "    Acids are substances that dissociate in water to yield  electrically charged atoms or molecules called ions  "
			}, {
			  "choiceid" : 3796049,
			  "choicetext" : "    One of which is a hydrogen ion <math><mrow><mo>(</mo><msup><mi>H</mi><mo>+</mo></msup><mo>)</mo></mrow></math><xml>     </xml> and bases  ionize in water to yield hydroxide ions <math><mrow><mo>(</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>)</mo></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3796050,
			  "choicetext" : "    Both A and B  "
			}, {
			  "choiceid" : 3796051,
			  "choicetext" : "    Neither A nor B  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Acids are substances that dissociate in water to yield  electrically charged atoms or molecules called ions.   <p>One of which is a hydrogen ion <math><mrow><mo>(</mo><msup><mi>H</mi><mo>+</mo></msup><mo>)</mo></mrow></math><xml>     </xml> and bases  ionize in water to yield hydroxide ions <math><mrow><mo>(</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>)</mo></mrow></math><xml>     </xml></p>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635806,
			"sno" : 38,
			"questiontext" : "The amount of humidity in the atmosphere is a measure  of _____ in air.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Weather and climate/Weather and climate",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635806/7.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569134909000,
			"updatedon" : 1569134909000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3031701,
			  "choicetext" : "    Heat  "
			}, {
			  "choiceid" : 3031702,
			  "choicetext" : "    Temperature  "
			}, {
			  "choiceid" : 3031703,
			  "choicetext" : "    Chemical  "
			}, {
			  "choiceid" : 3031704,
			  "choicetext" : "    Moisture  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    The measure of moisture in air of atmosphere is called  “humidity<b style='mso-bidi-font-weight:normal'>”.</b>  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635815,
			"sno" : 39,
			"questiontext" : "The temperature, humidity, rainfall, wind speed etc.,  are called the ______ of weather",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Weather and climate/Weather and climate",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635815/4.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569134979000,
			"updatedon" : 1613122525000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795236,
			  "choicetext" : "    Elements  "
			}, {
			  "choiceid" : 3795237,
			  "choicetext" : "    Compounds  "
			}, {
			  "choiceid" : 3795238,
			  "choicetext" : "    Indicators  "
			}, {
			  "choiceid" : 3795239,
			  "choicetext" : "    Chemicals  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Elements of weather.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635822,
			"sno" : 40,
			"questiontext" : "All changes taking place in the atmosphere are caused  by the",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Weather and climate/Weather and climate",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635822/5.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135069000,
			"updatedon" : 1613122574000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795248,
			  "choicetext" : "    Moon  "
			}, {
			  "choiceid" : 3795249,
			  "choicetext" : "    Sun  "
			}, {
			  "choiceid" : 3795250,
			  "choicetext" : "    Earth  "
			}, {
			  "choiceid" : 3795251,
			  "choicetext" : "    Stars  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Sun is responsible for all types of changes.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635829,
			"sno" : 41,
			"questiontext" : "Which of the following change cannot be reversed?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Changes around Us/Changes around Us",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635829/6.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135157000,
			"updatedon" : 1613122619000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795252,
			  "choicetext" : "    Hardening of cement  "
			}, {
			  "choiceid" : 3795253,
			  "choicetext" : "    Freezing of ice cream  "
			}, {
			  "choiceid" : 3795254,
			  "choicetext" : "    Opening a door  "
			}, {
			  "choiceid" : 3795255,
			  "choicetext" : "    Melting of chocolate  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Hardening of cement is permanent change.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635835,
			"sno" : 42,
			"questiontext" : "Lemonade is prepared by mixing",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Changes around Us/Changes around Us",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635835/7.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135244000,
			"updatedon" : 1613122703000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795264,
			  "choicetext" : "    Sand in water  "
			}, {
			  "choiceid" : 3795265,
			  "choicetext" : "    Ice in water  "
			}, {
			  "choiceid" : 3795266,
			  "choicetext" : "    Oil in water  "
			}, {
			  "choiceid" : 3795267,
			  "choicetext" : "    Lemon juice and sugar in water  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Lemon juice and sugar in water are components of  lemonade.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635838,
			"sno" : 43,
			"questiontext" : "When the iron blade is fixed to the wooden handle it is  fitted",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Matter and Sorting of Materials/Matter and Sorting of Materials",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635838/12.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135308000,
			"updatedon" : 1569135308000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3031829,
			  "choicetext" : "    By heating then cooling  "
			}, {
			  "choiceid" : 3031830,
			  "choicetext" : "    By cooling then heating  "
			}, {
			  "choiceid" : 3031831,
			  "choicetext" : "    By boiling then cooling  "
			}, {
			  "choiceid" : 3031832,
			  "choicetext" : "    By freezing  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    The iron blade is fixed to the wooden handle is fitted  by heating and then cooling.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635841,
			"sno" : 44,
			"questiontext" : "The rate of sedimentation is increased by adding ____  to the water",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Separation of substances/Separation of substances",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635841/7.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135389000,
			"updatedon" : 1613389152000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3802460,
			  "choicetext" : "    Salt   "
			}, {
			  "choiceid" : 3802461,
			  "choicetext" : "    Sugar  "
			}, {
			  "choiceid" : 3802462,
			  "choicetext" : "    Alum  "
			}, {
			  "choiceid" : 3802463,
			  "choicetext" : "    Soap  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Alum increase the rate of setting of sedimentation.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635845,
			"sno" : 45,
			"questiontext" : "The process of separating the constituents of a liquid  by agitating it vigorously",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Separation of substances/Separation of substances",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635845/6.docx",
			"keywords" : "7TH 280919",
			"createdon" : 1569135473000,
			"updatedon" : 1613389107000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3802456,
			  "choicetext" : "    Evaporation  "
			}, {
			  "choiceid" : 3802457,
			  "choicetext" : "    Churning  "
			}, {
			  "choiceid" : 3802458,
			  "choicetext" : "    Filtration  "
			}, {
			  "choiceid" : 3802459,
			  "choicetext" : "    Sedimentation  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Churning separate cream from butter milk.   ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635645,
			"sno" : 46,
			"questiontext" : "Air  is a ________ of some gases ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Air around US/Air around US",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635645/13.docx",
			"keywords" : "7TH 290919",
			"createdon" : 1569072430000,
			"updatedon" : 1613122878000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795280,
			  "choicetext" : "    Suspension    "
			}, {
			  "choiceid" : 3795281,
			  "choicetext" : "    Solution    "
			}, {
			  "choiceid" : 3795282,
			  "choicetext" : "    Compound    "
			}, {
			  "choiceid" : 3795283,
			  "choicetext" : "    Mixture    "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Air  is mixture of gases.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635639,
			"sno" : 47,
			"questiontext" : "The  ________ makes the windmill to rotate ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Air around US/Air around US",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635639/12.docx",
			"keywords" : "7TH 290919",
			"createdon" : 1569072387000,
			"updatedon" : 1613127617000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3796076,
			  "choicetext" : "    Wind    "
			}, {
			  "choiceid" : 3796077,
			  "choicetext" : "    Water  vapour   "
			}, {
			  "choiceid" : 3796078,
			  "choicetext" : "    Nitrogen    "
			}, {
			  "choiceid" : 3796079,
			  "choicetext" : "    Oxygen    "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "1",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Wind  makes wind mill to rotate.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635633,
			"sno" : 48,
			"questiontext" : "The  nitrogen content in air is ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Air around US/Air around US",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635633/15.docx",
			"keywords" : "7TH 290919",
			"createdon" : 1569072347000,
			"updatedon" : 1613123032000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795300,
			  "choicetext" : "    88  %  "
			}, {
			  "choiceid" : 3795301,
			  "choicetext" : "    21  %  "
			}, {
			  "choiceid" : 3795302,
			  "choicetext" : "    78  %  "
			}, {
			  "choiceid" : 3795303,
			  "choicetext" : "    68  %  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    78  % of Nitrogen present in air.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 635613,
			"sno" : 49,
			"questiontext" : "A building is protected from the effect of lightning by using  which of the given devices ?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Weather and climate/Weather and climate",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "635613/17.docx",
			"keywords" : "7TH 290919",
			"createdon" : 1569072263000,
			"updatedon" : 1613123184000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3795328,
			  "choicetext" : "    Seismograph  "
			}, {
			  "choiceid" : 3795329,
			  "choicetext" : "    Electroscope  "
			}, {
			  "choiceid" : 3795330,
			  "choicetext" : "    Lightning conductor  "
			}, {
			  "choiceid" : 3795331,
			  "choicetext" : "    Anemometer  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Lightning conductor will protect house from lightining.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 636096,
			"sno" : 50,
			"questiontext" : "A  and B are two water beakers, A having  pen cap and B having piece of chalk which  one is sink in water ",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "CHEMISTRY/OLYMPIAD/Matter and Sorting of Materials/Matter and Sorting of Materials",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "636096/15.docx",
			"keywords" : "7TH 300919",
			"createdon" : 1569148250000,
			"updatedon" : 1613127674000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3796088,
			  "choicetext" : "    Pen  cap   "
			}, {
			  "choiceid" : 3796089,
			  "choicetext" : "    Piece  of chalj   "
			}, {
			  "choiceid" : 3796090,
			  "choicetext" : "    Both  are sink  "
			}, {
			  "choiceid" : 3796091,
			  "choicetext" : "    Both  are not sink   "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Piece  of chalk will sink in water.  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  } ]
		}, {
		  "subject" : 9535,
		  "subjectname" : "BIOLOGY",
		  "questions" : [ {
			"questionid" : 628407,
			"sno" : 51,
			"questiontext" : "Junk food are not good for health because they contain  _________.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Food components/Food components/Roughages, water, balanced diet (avoid junk food)",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "628407/1.docx",
			"keywords" : "Roughages, water, balanced diet (avoid junk food) (NCQ)",
			"createdon" : 1567254241000,
			"updatedon" : 1613478724000,
			"questionstatus" : "Approved",
			"choicesperline" : 2,
			"questionchoices" : [ {
			  "choiceid" : 3806588,
			  "choicetext" : "    Low fat and more sugar  "
			}, {
			  "choiceid" : 3806589,
			  "choicetext" : "    High fat and low sugar  "
			}, {
			  "choiceid" : 3806590,
			  "choicetext" : "    High fat and sugar  "
			}, {
			  "choiceid" : 3806591,
			  "choicetext" : "    Harmful chemicals  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Conceptual  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 755211,
			"sno" : 52,
			"questiontext" : "What is the  source of roughage / dietary fibres?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Food components/Food components/Roughages, water, balanced diet (avoid junk food)",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "755211/35.docx",
			"keywords" : "Roughages, water, balanced diet (avoid junk food) (NCQ)",
			"createdon" : 1596102527000,
			"updatedon" : 1609910685000,
			"questionstatus" : "Approved",
			"choicesperline" : 2,
			"questionchoices" : [ {
			  "choiceid" : 3718171,
			  "choicetext" : "    <a name='_GoBack'></a>Animal  material  "
			}, {
			  "choiceid" : 3718172,
			  "choicetext" : "    Fibrous and leafy plant  material  "
			}, {
			  "choiceid" : 3718173,
			  "choicetext" : "    Nitrogenous compounds  "
			}, {
			  "choiceid" : 3718174,
			  "choicetext" : "    Amino acids  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    By conceptual  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 761107,
			"sno" : 53,
			"questiontext" : "Aquatic  plants respire in water by utilizing _______.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L3(C-BATCH MPL IPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Respiration in Organisims/Breathing in other animals",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "761107/3.docx",
			"keywords" : "Breathing in other animals (NCQ)",
			"createdon" : 1597920819000,
			"updatedon" : 1613478754000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3806600,
			  "choicetext" : "    Dissolved  <math><mrow><mi>C</mi><msub><mi>O</mi><mn>2</mn></msub></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3806601,
			  "choicetext" : "    Dissolved  <math><mrow><msub><mi>O</mi><mn>2</mn></msub></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3806602,
			  "choicetext" : "    Terrestrial  <math><mrow><mi>C</mi><msub><mi>O</mi><mn>2</mn></msub></mrow></math><xml>     </xml>  "
			}, {
			  "choiceid" : 3806603,
			  "choicetext" : "    Terrestrial  <math><mrow><msub><mi>O</mi><mn>2</mn></msub></mrow></math><xml>     </xml>  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    By  Conceptual  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 789770,
			"sno" : 54,
			"questiontext" : "The seeds of an Indian lotus  pond remain viable for ___________ years.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L4(CIPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Our food/Introduction & food ingredients",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "789770/4.docx",
			"keywords" : "OUR FOOD",
			"createdon" : 1613468001000,
			"updatedon" : 1613468001000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3805184,
			  "choicetext" : "    200- 300  "
			}, {
			  "choiceid" : 3805185,
			  "choicetext" : "    300- 400  "
			}, {
			  "choiceid" : 3805186,
			  "choicetext" : "    400- 500  "
			}, {
			  "choiceid" : 3805187,
			  "choicetext" : "    500- 600  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    300- 400  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 789771,
			"sno" : 55,
			"questiontext" : "Who among the following  described leaves as organs of transpiration?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L4(CIPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Our food/Introduction & food ingredients",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "789771/5.docx",
			"keywords" : "OUR FOOD (NCQ)",
			"createdon" : 1613468158000,
			"updatedon" : 1613468158000,
			"questionstatus" : "Approved",
			"choicesperline" : 2,
			"questionchoices" : [ {
			  "choiceid" : 3805212,
			  "choicetext" : "    Von Helmont  "
			}, {
			  "choiceid" : 3805213,
			  "choicetext" : "    Stephen Hales  "
			}, {
			  "choiceid" : 3805214,
			  "choicetext" : "    Jan Baptista Lamarck  "
			}, {
			  "choiceid" : 3805215,
			  "choicetext" : "    None of the above  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Stephen Hales  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 641172,
			"sno" : 56,
			"questiontext" : "What  is the nature of digestive juices in the stomach?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L1(TECHNO CBATCH MEDICON)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/OLYMPIAD/From the tasting to digestion/From the tasting to digestion",
			"referencebook" : "6T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "641172/6.doc",
			"keywords" : "From the tasting to digestion (NCQ)",
			"createdon" : 1569399404000,
			"updatedon" : 1613478812000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3806608,
			  "choicetext" : "    Basic  "
			}, {
			  "choiceid" : 3806609,
			  "choicetext" : "    Neutral    "
			}, {
			  "choiceid" : 3806610,
			  "choicetext" : "    Acidic    "
			}, {
			  "choiceid" : 3806611,
			  "choicetext" : "    Alkaline  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Acidic  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 789773,
			"sno" : 57,
			"questiontext" : "Weather reports are prepared by  the _____________ Department of Government.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L4(CIPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Our food/Introduction & food ingredients",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "789773/7.docx",
			"keywords" : "OUR FOOD (NCQ)",
			"createdon" : 1613468262000,
			"updatedon" : 1613468262000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3805228,
			  "choicetext" : "    Geological  "
			}, {
			  "choiceid" : 3805229,
			  "choicetext" : "    Meteorological  "
			}, {
			  "choiceid" : 3805230,
			  "choicetext" : "    Environmental  "
			}, {
			  "choiceid" : 3805231,
			  "choicetext" : "    None of the above  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Meteorological  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 789772,
			"sno" : 58,
			"questiontext" : "Which of the following organ  gets damaged by means of smoking?",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L4(CIPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Our food/Introduction & food ingredients",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "789772/8.docx",
			"keywords" : "OUR FOOD (NCQ)",
			"createdon" : 1613468182000,
			"updatedon" : 1613468182000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3805216,
			  "choicetext" : "    Hear<a name='_GoBack'></a>t  "
			}, {
			  "choiceid" : 3805217,
			  "choicetext" : "    Liver  "
			}, {
			  "choiceid" : 3805218,
			  "choicetext" : "    Lung  "
			}, {
			  "choiceid" : 3805219,
			  "choicetext" : "    Brain  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "3",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Lung  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 789774,
			"sno" : 59,
			"questiontext" : "Bryophyllum has buds in the  margins of ___________.",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "L4(CIPL)",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/Our food/Introduction & food ingredients",
			"referencebook" : "7T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "7TH_CLASS",
			"docpath" : "789774/9.docx",
			"keywords" : "OUR FOOD (NCQ)",
			"createdon" : 1613468306000,
			"updatedon" : 1613468306000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3805232,
			  "choicetext" : "    Stems  "
			}, {
			  "choiceid" : 3805233,
			  "choicetext" : "    Nodes  "
			}, {
			  "choiceid" : 3805234,
			  "choicetext" : "    Roots  "
			}, {
			  "choiceid" : 3805235,
			  "choicetext" : "    Leaves  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "4",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Leaves  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  }, {
			"questionid" : 650224,
			"sno" : 60,
			"questiontext" : "Examples  of grains are",
			"questiontypeid" : 1,
			"questiontype" : "Straight Objective",
			"difficultlevel" : "SCORE_L2",
			"objective" : "Conceptual",
			"taxanomy" : null,
			"conceptlevel" : null,
			"syllabus" : "BIOLOGY/OLYMPIAD/Food where does if come from/Food where does if come from",
			"referencebook" : "6T-AP-TS-CBSE-NCQ",
			"elaboration" : null,
			"previousquestion" : null,
			"referenceid" : null,
			"studyclass" : "6TH_CLASS",
			"docpath" : "650224/3.docx",
			"keywords" : "6TH231119",
			"createdon" : 1571372984000,
			"updatedon" : 1571372984000,
			"questionstatus" : "Approved",
			"choicesperline" : 4,
			"questionchoices" : [ {
			  "choiceid" : 3098329,
			  "choicetext" : "    Potato  and carrot  "
			}, {
			  "choiceid" : 3098330,
			  "choicetext" : "    Rice  and wheat  "
			}, {
			  "choiceid" : 3098331,
			  "choicetext" : "    Both  A &amp; B   "
			}, {
			  "choiceid" : 3098332,
			  "choicetext" : "    Pea  "
			} ],
			"positiveMark" : 1.0,
			"negativeMark" : 0.0,
			"questionanswer" : "2",
			"clearresponse" : null,
			"markforreview" : null,
			"iscorrect" : null,
			"marks" : null,
			"visit" : null,
			"attempttime" : null,
			"studentanswer" : null,
			"solution" : "    Rice  and wheat  ",
			"hints" : [ ],
			"subquestions" : [ ]
		  } ]
		} ]
        }
    }

	handleClick(){
        this.setState({
            value : this.state.count + 1
        })
    }

	showQuestion(queNo) {
		
		this.showQuestionNo=this.showQuestionNo+1;
	//	alert(showQuestionNo);
	  }
	  

	

	render() {
	return (
		<div className='app'>
			
				<>
					



					

	
	<ul >

	

		
	  {
	   

	   this.constructor.sampleJSON.subjects.map(function(subject){

			var namesList =subject.questions.map(function(queVal,index){
				
				return (
					<>
					
					<div className='question-section' 
					>
						<div className='question-count'>
							<span>Question {index+1}</span>
						</div>
						
						<div className='question-text'>
					
		             <div>
            		             <MathJax math={queVal.questiontext} />
			
                    </div>
		            </div>
					
					</div>
					<div className='answer-section' style={1===index+1? {display: 'inline'} : { display: 'none' }}>
						{queVal.questionchoices.map((answerOption) => (
							<button >
								<MathJax math={answerOption.choicetext} />
								</button>
						))}
					</div>
					
					</>
				  );
			  })
			return <li >{namesList}
			
			</li>;
		  })


		  
		
	

		


		



		}

<br></br>
		<br></br>
		<br></br>
	<button onClick={this.handleClick.bind(this)} >
        Save & Next
      </button>
	
	</ul>


					
				</>
			
		</div>
	);
	}
}
export default ExamPaper