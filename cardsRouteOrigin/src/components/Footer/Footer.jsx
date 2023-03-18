import './footer.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
    } from 'react-router-dom';
    import {Home,WordsList,CardsGame,WordsGame,Error} from '..//..//Pages/index'

function Footer () {



    return (

<>
{/* <NavLink className="link" to='/'>Home</NavLink>
<NavLink className="link" to='/wordslist'>Words List</NavLink>
<NavLink className="link" to='/wordsgame'>Words Game</NavLink>
<NavLink className="link" to='/cardsgame'>Cards Game</NavLink> */}


<div className='footer'>
            <div className="footer__item_footer-home"><NavLink to='/'>Home</NavLink></div>
            <div className="footer__item_footer-wordslist"><NavLink to='/wordslist'>Words List</NavLink></div>
            <div className="footer__item_footer-wordsgame"><NavLink to='/wordsgame'>Words Game</NavLink></div>
            <div className="footer__item_footer-flashcards"><NavLink to='/cardsgame'>Cards Game</NavLink></div>
            {/* <div className="footer-contact">Contact</div> */}
        </div>

{/* <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/wordslist' element={<WordsList/>}/>
<Route path='/wordsgame' element={<WordsGame/>}/>
<Route path='/cardsgame' element={<CardsGame/>}/>
<Route path ='/logo' element={<Navigate to='/wordslist'/>}/>
<Route path='*' element={<Error/>}/>
</Routes> */}

</>
    
    );
}
export default Footer;
