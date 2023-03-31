import "./footer.css"
function Footer() {
    return (
        <div class="footer-div">
        <div class="footer-div">
            <div class="row">
                <div class="col2">
                    <h4 class="sections">CATEGORIES</h4>
                    <ul>
                        <li class="lists">
                            <a href="#" class="text-hov">Women</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">Men</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">Shoes</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">Watches</a>
                        </li>
                    </ul>
                </div>
                <div class="col2">
                    <h4 class="sections"> HELP</h4>
                    <ul>
                        <li class="lists">
                            <a href="#" class="text-hov">Track Order</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">Return</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">Shipping</a>
                        </li>
                        <li class="lists">
                            <a href="#" class="text-hov">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div class="col3">
                    <h4 class="sections">GET IN TOUCH</h4>
                    <p class="para-footer">

                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call
                        us on (+1) 96 716 6879

                    </p>
                    <div class="social">
                        <div class="brand-logo">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div class="brand-logo">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div class="brand-logo">
                            <i class="fa-brands fa-pinterest"></i>
                        </div>
                    </div>

                </div>
                <div class="col2">
                    <h4 class="sections">NEWSLETTER</h4>
                    <form >
                        <div class="wrap-input">
                            <input class="input1" type="text" name="email" placeholder="info@cozastore.com"/>

                        </div><br/>
                        <div class="last">
                            <button class="subscribe">Subscribe</button>
                        </div>
                    </form>

                </div>

            </div>
            </div>
            </div>
    )
}
export default Footer