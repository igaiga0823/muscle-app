import React from 'react';
import '../../css/Login.css'
import './a.scss'
import './a.css'

const AppBar = () => {

    return (
        <div>
            <header class="header">
            <div class="container">
                <h1 class="logo">Vini</h1>
                <ul class="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            </header>
            <div class="banner"> Welcome! </div>
            <div class="container">
            <h2>What is Lorem Ipsum?</h2>
            <p><b>Lorem Ipsum </b>is simply dummy text of he printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>

            <h3>Contrary to popular belief</h3> <p> Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            <h3>The standard chunk </h3>  <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are a going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
            </p>
            <h3>Embarrassing hidden in the middle of text</h3>
            <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>

            <ul>
                <li>paragraphs</li>
                <li>words</li>
                <li>bytes</li>
                <li>lists</li>
            </ul>
            <p>Start with 'Lorem ipsum dolor sit amet...'</p>
            
            </div>
                
                <div class="bottom-nav fixed-bottom">
                <ul class="nav">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-rss"></i></a></li>
                </ul>
                </div>
                <footer class="footer">
                <div class="container">
                    <ul class="nav">
                        <li><a href="#fake">Home</a> </li>
                        <li>|</li>
                        <li><a href="#fake">Tickets</a> </li>
                        <li>|</li>
                        <li><a href="#fake">Recent Action </a> </li>
                        <li>|</li>
                        <li><a href="#fake">About  </a> </li>
                        <li>|</li>
                        <li><a href="#fake">contact us</a> </li>
                    </ul>
                </div>
                <p class="copy"> Copy rights @Vineeth.TR </p>
            </footer>
        </div>
    )
}

export default AppBar





