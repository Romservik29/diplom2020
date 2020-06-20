import React from 'react'
import styled from 'styled-components'
import MyButton from '../../util/MyButton'
import EditIcon from '@material-ui/icons/Edit';
const ImageWrapper = styled.div`
    & .image-wrapper {
      text-align: center;
      position: relative;
      
      button: {
        position: absolute;
        top: 80%;
        left: 70%;
      }
    }
     .profile-image {
      width: 200px;
      height: 200px;
      object-fit: cover;
      max-width: 100%;
      border-radius: 50%;
    }
     .profile-details {
      text-align: center;
      & span, svg{
        vertical-align: middle;
      }
       a{
        color: #00bcd4;
      }
    }
`;

export default function ProfileImage(props) {
    return (
        <ImageWrapper>
            <div className="image-wrapper">
                <img src="https://im0-tub-by.yandex.net/i?id=f29f9c06e0f9d7bc8ca4fb19da6bf838&n=13" alt="profile" className="profile-image" />
                <input
                    type="file"
                    id="imageInput"
                    hidden="hidden"
                    //onChange={this.handleImageChange}
                />
                <MyButton
                    tip="Изменить фото"
                    //onClick={this.handleEditPicture}
                    btnClassName="button"
                >
                    <EditIcon color="primary" />
                </MyButton>
            </div>
            </ImageWrapper>
    )
}
