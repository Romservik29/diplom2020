import React from 'react'
import styled from 'styled-components'
import SubTitle from './SubTitle' 



export default function Bio(props) { 

const CardTop = styled.div`
padding: 20px;
text-align: center;
border: 1px inset ${props => props.theme.background};
font-size: 22px;  
`;

const AuthorImage = styled.img`
width: 35%;
margin-right: 15px;
margin-bottom: 1em;
margin-top: 20px;
border-radius: 10px;
box-shadow: 0 0 5px 5px ${props=>props.theme.background};
 `;

const CardContent = styled.section`
    text-indent: 1.5em;
        &:first-letter{
            color:${props => props.theme.main};
            font-size: 2em;
        }
`;
    return (
        <>
            <div>
                <CardTop>
                    <AuthorImage src="https://p16.muscdn.com/img/musically-maliva-obj/1647483724906502~c5_720x720.jpeg" alt="Автор"/>
                        <h2 style={{lineHeight: '10px'}}>Пушкин</h2>
                        <h4 style={{lineHeight: '10px'}}>Александр Сергеевич</h4>
                        <p style={{fontWeight: 'lighter'}}>9 марта 1934 - 27 марта 1968</p>
                </CardTop>
                <SubTitle name="Биография" edit/>

            <CardContent>
                <p align="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, in impedit. Repellat, porro cupiditate qui eaque dicta sed sint autem est dolore, voluptas laboriosam ipsum provident quaerat dolor consequatur mollitia!
                Dolore animi soluta aut dolores. Quo molestiae expedita, odio fugiat ipsa amet! Itaque temporibus eaque iste nobis explicabo, quidem unde, ipsa beatae earum repellat commodi odio natus omnis ut exercitationem?
                Numquam animi quam minima inventore fugiat voluptate expedita sunt consequuntur, blanditiis perferendis error, quisquam corporis aut laboriosam sint sequi id molestiae excepturi ut ipsum dolorem minus dignissimos dicta! Modi, officia.
                Labore consectetur impedit amet sapiente dolorum perspiciatis, tempore optio quibusdam totam dolorem neque laboriosam repudiandae obcaecati minus unde alias aliquam. Commodi iste dicta praesentium illum eveniet ipsa doloribus modi velit! <br/><br/>
                Rem, possimus aut. Suscipit similique sed dolore ullam esse quisquam facere adipisci cum, ipsam laboriosam, iure beatae excepturi, consequatur eaque qui earum veritatis corrupti blanditiis! Officia, tempora. Sapiente, laudantium accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, vitae! Quis expedita consequatur doloribus, saepe rerum, possimus exercitationem sint ducimus assumenda earum molestias id aperiam, inventore culpa consequuntur ullam ea.
                Nihil vero reprehenderit neque numquam quaerat illum adipisci quod pariatur fuga perferendis quis odio facilis cupiditate quas corrupti at consectetur id voluptas atque nostrum voluptates consequuntur, perspiciatis nam. Dolor, sapiente?
                Commodi soluta est, iste, eaque quia alias minima, neque tempora quaerat ipsa minus excepturi ipsam suscipit sapiente at quam eveniet. Animi dicta voluptates quod itaque sit non assumenda optio provident? <br/><br/>
                Cupiditate libero magnam itaque soluta a consequatur ipsum alias distinctio numquam vero quae ullam impedit dolorem ducimus voluptas dolore odio blanditiis voluptatibus voluptate, quidem doloribus corrupti. Culpa eaque nesciunt unde.
                Quia impedit autem atque totam? Excepturi sequi tenetur temporibus eligendi. Esse nulla optio dolorum quod sunt, debitis perferendis laborum neque eveniet magni? Eaque mollitia vero animi sequi error ducimus ad!
                Nesciunt saepe, temporibus iusto a fuga nulla labore tempora ipsum quos reprehenderit vitae molestiae quibusdam. Quidem magni tempora illum. Maxime repellat debitis quo reprehenderit odio aperiam deserunt magnam natus dignissimos. <br/><br/>
                Facilis natus iste iusto saepe repellendus numquam eveniet amet voluptates exercitationem quis architecto, vel doloremque explicabo suscipit eius? Autem impedit corporis nobis mollitia doloribus expedita animi molestiae iste quidem assumenda.
                Dignissimos similique accusantium, voluptates veniam molestiae eligendi a accusamus modi repellat nulla, ea cumque. Vitae, dicta quas illo ea, molestias impedit vel reiciendis facilis, voluptates voluptas quae atque eveniet praesentium.
                Nihil officiis quam odit cupiditate maxime veniam veritatis excepturi, similique incidunt enim natus quaerat repellat itaque nisi quibusdam voluptate minus soluta! Quae facere sit earum veritatis quidem illum beatae ex!border <br/><br/>
                Vitae quis sequi excepturi quae unde voluptatem. Pariatur voluptatem, repudiandae vel quibusdam dolores reiciendis temporibus nisi distinctio architecto nam ipsum iste aliquam illum laudantium dolorem quos quas. Quibusdam, nisi deserunt.
                </p>
           </CardContent>
           </div>

            
        </>
    )
}
