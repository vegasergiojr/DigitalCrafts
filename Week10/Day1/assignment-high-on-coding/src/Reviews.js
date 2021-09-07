import { Component } from "react";
import './Reviews.css'

class Reviews extends Component{
    render(){
        return(
            <div id="reviewBody">
                <h3>Hello WatchKit</h3>
                <p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p>
                <p class="comments">12 comments 124 likes</p>

                <h3>Introduction to Swift</h3>
                <p>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.</p>
                <p class="comments">15 comments 45 likes</p>
            </div>
            
        )
    }
}
export default Reviews