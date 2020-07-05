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

  const handleEditPicture = () => {
    const fileInput = document.getElementById('profileImageInput');
    fileInput.click();
  };
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    props.changeProfileImage(formData);
  };
  return (
    <ImageWrapper>
      <div className="image-wrapper">
        <img src={props.imageUrl} alt="profile" className="profile-image" />
        <input
          type="file"
          id="profileImageInput"
          hidden="hidden"
         onChange={handleImageChange}
        />
        <MyButton
          tip="Изменить фото"
          onClick={handleEditPicture}
          btnClassName="button"
        >
          <EditIcon color="primary" />
        </MyButton>
      </div>
    </ImageWrapper>
  )
}
