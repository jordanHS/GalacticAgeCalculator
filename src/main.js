import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './calculator.js';




$(document).ready(function() {
    $("#calculator").submit(function() {
        event.preventDefault();
        
        let currentDay = parseInt($("#currentDay").val());
        let currentMonthNum = parseInt($("#currentMonthNum").val());
        let currentYear = parseInt($("#currentYear").val());
        // let birthday = parseInt($("#birthday").val());
        console.log(currentMonthNum, currentYear);
        let ageCalculator = new AgeCalculator(currentDay, currentMonthNum, currentYear, birthday);



        



        
    });



});
