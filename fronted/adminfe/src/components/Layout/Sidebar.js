import logo200Image from '../../assets/img/logo/logo_200.png';
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from '../../components/SourceLink';
import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdDashboard, MdRadioButtonChecked,} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavLink as BSNavLink,} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const navItems = [
    {to: '/', name: 'dashboard', exact: true, Icon: MdDashboard},
    {to: '/management', name: 'users management', exact: false, Icon: MdRadioButtonChecked},
];

// const navManagements = [
//     {to: '/management/students', name: 'students', exact: false, Icon: MdRadioButtonChecked},
//     {to: '/management/teachers', name: 'teachers', exact: false, Icon: MdGroupWork,},
//     {to: '/management/admins', name: 'admins', exact: false, Icon: MdChromeReaderMode}
// ];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
    state = {
        isOpenManagements: true
    };

    handleClick = name => () => {
        this.setState(prevState => {
            const isOpen = prevState[`isOpen${name}`];

            return {
                [`isOpen${name}`]: !isOpen,
            };
        });
    };

    render() {
        return (
            <aside className={bem.b()} data-image={sidebarBgImage}>
                <div className={bem.e('background')} style={sidebarBackground}/>
                <div className={bem.e('content')}>
                    <Navbar>
                        <SourceLink className="navbar-brand d-flex">
                            <img
                                src={logo200Image}
                                width="40"
                                height="30"
                                className="pr-2"
                                alt=""
                            />
                            <span className="text-white">Reduction <FaGithub/></span>
                        </SourceLink>
                    </Navbar>
                    <Nav vertical>
                        {navItems.map(({to, name, exact, Icon}, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')}/>
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}

                        {/*<NavItem*/}
                        {/*    className={bem.e('nav-item')}*/}
                        {/*    onClick={this.handleClick('Managements')}*/}
                        {/*>*/}
                        {/*    <BSNavLink className={bem.e('nav-item-collapse')}>*/}
                        {/*        <div className="d-flex">*/}
                        {/*            <MdExtension className={bem.e('nav-item-icon')}/>*/}
                        {/*            <span className=" align-self-start">Managements</span>*/}
                        {/*        </div>*/}
                        {/*        <MdKeyboardArrowDown*/}
                        {/*            className={bem.e('nav-item-icon')}*/}
                        {/*            style={{*/}
                        {/*                padding: 0,*/}
                        {/*                transform: this.state.isOpenManagements*/}
                        {/*                    ? 'rotate(0deg)'*/}
                        {/*                    : 'rotate(-90deg)',*/}
                        {/*                transitionDuration: '0.3s',*/}
                        {/*                transitionProperty: 'transform',*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </BSNavLink>*/}
                        {/*</NavItem>*/}
                        {/*<Collapse isOpen={this.state.isOpenManagements}>*/}
                        {/*    {navManagements.map(({to, name, exact, Icon}, index) => (*/}
                        {/*        <NavItem key={index} className={bem.e('nav-item')}>*/}
                        {/*            <BSNavLink*/}
                        {/*                id={`navItem-${name}-${index}`}*/}
                        {/*                className="text-uppercase"*/}
                        {/*                tag={NavLink}*/}
                        {/*                to={to}*/}
                        {/*                activeClassName="active"*/}
                        {/*                exact={exact}*/}
                        {/*            >*/}
                        {/*                <Icon className={bem.e('nav-item-icon')}/>*/}
                        {/*                <span className="">{name}</span>*/}
                        {/*            </BSNavLink>*/}
                        {/*        </NavItem>*/}
                        {/*    ))}*/}
                        {/*</Collapse>*/}
                    </Nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;
