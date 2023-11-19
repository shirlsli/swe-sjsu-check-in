import React from "react"

export default function Event() {
    return (
    <div>
        <form action="">
            <div id="wrapper" style="background-color:white">
                <div class="container" style="background-color:white">
                    <input type="text" placeholder="Event Name" name="name" required/>
                    <br/>
                    <label for="type">Choose an event type:</label>
                    <select id="type" name="types">
                        <option value="wow">WOW</option>
                        <option value="ewi">EWI</option>
                        <option value="prodev">PRODEV</option>
                        <option value="social">SOCIAL</option>
                        <option value="social">COMPANY</option>
                    </select>
                    <br/>
                    <input type="date" id="date" name="date"/>
                    <br/>
                    <input type="text" placeholder="Event Description" name="desc" required/>
                    <label for="points">Points:</label>
                    <input type="number" id="points" name="points" required/>
                    <br/>
                    <label for="rsvp">Max RSVP:</label>
                    <input type="number" id="rsvp" name="rsvp" required/>
                    <br/>
                    <label for="pic">Choose a picture for the event:</label>
                    <input type="file" id="pic" name="picture"/>
                </div>
            
                <div class="container">
                <input type="submit" value="Submit"/>
                </div>
            </div>
        </form> 
    </div>)
}
