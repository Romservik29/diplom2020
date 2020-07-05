import React from 'react'
import Grid from '@material-ui/core/Grid'
import './illustrations.css';
import { connect } from 'react-redux';
import { getIllustration} from '../redux/actions/catalogActions'

const Illustrations = (props) => {

    React.useEffect(() => {
        props.getIllustration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid container justify='space-evenly' spacing={2}>
            <div class="wrapper">
                <div class="gallery">
                    <ul>
                        {props.illustrations.map(p =>
                            <li>
                                <img width='100%' src={p.illustrationUrl} alt="l" key={p.key} />
                            </li>)}
                    </ul>
                </div>
            </div>
        </Grid>
    )
}

const mapStateToProps = (state)=>({
    illustrations: state.data.illustrations
})

export default connect(mapStateToProps,{getIllustration}) (Illustrations)