import React from 'react';
import './../public/stylesheets/footer.css';
class Footer extends React.Component {
    render() {
        return (
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <a href='/' className="col-sm-3">
                            <h5>Home</h5>
                        </a>
                        <a href='/login' className="col-sm-3">
                            <h5>Sign In</h5>
                        </a>
                        <a href='/register' className="col-sm-3">
                            <h5>Sign Up</h5>
                        </a>
                        <div className="col-sm-3 info">
                            <h5>Information</h5>
                            <p> Đây là trang web dành cho việc tìm thuê người dạy.Uber For Tutor  cung cấp những trải nghiệm tuyệt vời cho người dạy và người học.</p>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;