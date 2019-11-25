import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalculator } from './calculator.js';




$(document).ready(function() {
    $("#calculator").submit(function() {
        event.preventDefault();
        
        let currentDay = parseInt($("#currentDay").val());
        let currentMonth = parseInt($("#currentMonth").val());
        let currentYear = parseInt($("currentYear").val());



        



        
    });



});
