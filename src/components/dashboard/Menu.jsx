import styled from "styled-components"
import { NavLink, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import profilebg from "../../assets/zain.jpg"
import TvIcon from '@mui/icons-material/Tv';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';

const Main = styled.section`
min-height: 90vh;
  display: flex;
@media (max-width:800px){
      flex-direction: column;
    }

`

const Navbar = styled.section`


overflow:auto;
font-weight:600;
transition:all 0.1s;
background-color:#fff;
box-shadow:0 0 30px 0 rgba(200 200 200 / 20%);
flex:1;
color:var(--white);
border-top: 2px solid white;
    position: sticky;
    left: 0;
    flex: 1;
    @media (max-width:800px){
     display: none;
    }
`

const HamNav = styled.section`
  display: flex;
  text-align: center;
  background-color: #353B48;
  padding: 2vh;
  margin: 0;
  display:flex;
`
const HamLeft = styled.section`
flex:1;
display:flex;
align-items:center;
`
const HamCenter = styled.section`
font-size:20px;
flex:1;
display:flex;
align-items:center;
justify-content:center;
`
const HamRight = styled.section`
display:flex;
flex:1;
align-items:center;
justify-content:flex-end;
`
const HamIcon = styled.section`
width:40px;
height:40px;
border-radius:20px;
border-radius:50%
overflow:hidden;
`
const SearchContainer = styled.section`
background:#4A5263;
display:flex;
align-items:center;
padding:9px;
border-radius:50px;
margin-left:13px
`
const SearchBtn = styled.button`
font-weight:600;
font-size:18px;
color:white;
background:transparent;
border:none;
`
const Searchbar = styled.input`
background:transparent;
font-size:17px;
border:none;
`
const H4 = styled.h4`
text-align: center;
padding: 10px;
margin: 0;
flex:2;
`
const H5 = styled.h5`
display:flex;
justify-content: space-between;
align-items: center;
text-transform: uppercase;
color:black;
font-size:20px;
font-weight:800;
text-align:center;
padding: 10px 35px 25px 5px;
`
const Links = styled.section`
  display: flex;
  align items:center;
  flex-direction: column;
`
const Link = styled.a`
color: var(--white);
text-decoration: none;
border-radius: 10px 0 0 0 ;
padding: 6px;
margin: 5px;
transition: all 0.5s ease;
&:hover{
  font-size: 17px;
}
`
const IconLinksContainer = styled.section`
display:flex;
flex-direction:"row";
padding: 10px;
`
const IconContainer = styled.section`
flex:1;
`
const LinksContainer = styled.section`
flex:4;
`


 

const Menu = () => {
    return (
        <>
            <HamNav>
                <HamLeft>
                    <MenuIcon />
                    <SearchContainer>
                        <Searchbar placeholder="Search Here" />
                        <SearchBtn>GO</SearchBtn>
                       
                    </SearchContainer>
                </HamLeft>
                <HamCenter>
                    <H4>DASHBOARD</H4>
                </HamCenter>
                <HamRight>
                    <HamIcon>
                        <img src={profilebg} alt="" style={{height:'100%', width:"100%",borderRadius:"20px"}} />
                    </HamIcon>
                </HamRight>
            </HamNav>
            <Main>
                <Navbar>
                    <H5>
                    <img
                    src="https://img.freepik.com/free-vector/hand-drawn-advocate-logo-design_23-2150652384.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais"
                    alt="Logo" 
                    style={{ height: '80px' }} 
      />
                        LAW OFFICE
                    </H5>
                    <Links>

                    <IconLinksContainer>
                    <IconContainer>
                        <TvIcon/> 
                    </IconContainer>
                    <LinksContainer>
                        <Link as={NavLink} to="/admin">DashBoard</Link>
                    </LinksContainer>
                    </IconLinksContainer>


                    <IconLinksContainer>
                    <IconContainer>
                        <GroupsIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/clientManagement">Client Management</Link>
                    </LinksContainer>
                    </IconLinksContainer>
                    
                    <IconLinksContainer>
                    <IconContainer>
                        <GavelIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/judgesDetails"> Clients Judges Details</Link>
                    </LinksContainer>
                    </IconLinksContainer>

                    <IconLinksContainer>
                    <IconContainer>
                        <CalendarMonthIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/hearingDates">Hearing Dates</Link>
                    </LinksContainer>
                    </IconLinksContainer>


                    <IconLinksContainer>
                    <IconContainer>
                        <WorkOutlineIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/casesDetails">Cases Details</Link>
                    </LinksContainer>
                    </IconLinksContainer>
                       
                    <IconLinksContainer>
                    <IconContainer>
                        <AccountBalanceIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/finance">Finance</Link>
                    </LinksContainer>
                    </IconLinksContainer>    

                    <IconLinksContainer>
                    <IconContainer>
                        <SettingsIcon/> 
                    </IconContainer>
                    <LinksContainer>
                    <Link as={NavLink} to="/admin/settings">Setting</Link>
                    </LinksContainer>
                    </IconLinksContainer>  
                    </Links>
                </Navbar>
                <Outlet />
            </Main>
        </>
    )
}

export default Menu
