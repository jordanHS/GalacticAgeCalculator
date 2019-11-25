import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalculator } from './calculator.js';




$(document).ready(function() {
    $("#calculator").submit(function() {
        event.preventDefault();
        
        let currentDate = $("#currentDate").val();
        let dateOfBirth = $("#dateOfBirth").val();


        let ageCalculator = new AgeCalculator(currentDate, dateOfBirth);

    }



});
