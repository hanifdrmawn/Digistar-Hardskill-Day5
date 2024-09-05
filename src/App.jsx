import React, { useState } from 'react';
import './index.css';

function App() {
  const [profile, setProfile] = useState({
    fullName: 'Hanif Darmawan',
    nickName: 'Hanif',
    email: 'darmawanhanif.hd@gmail.com',
    birthday: '2002-11-04',
    wargaNegara: 'Indonesia',
    state: 'Jawa Timur',
    postalCode: '65139',
    phoneNumber: '',
    facebookURL: '',
    twitterURL: '',
    googleURL: '',
    linkedinURL: '',
    websiteURL: '',
    profilePicture: 'https://hanifdrmawn.github.io/img/main.png',
    slogan: 'Dalam setiap halaman, terpatri semangat pejuang yang tak kenal lelah menggali ilmu.',
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingLinks, setIsEditingLinks] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdateProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleUpdateLinks = () => {
    setIsEditingLinks(!isEditingLinks);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-info">
          <img
            className="profile-avatar"
            src={profile.profilePicture}
            alt="Profile"
          />
          <h2>{profile.fullName}</h2>
          <p className="enthusiast-label">Data Enthusiast</p>
          <div className="stats">
            <span>86 posts</span>
            <span>1.1k messages</span>
            <span>4.5k members</span>
          </div>
          <div>
            <label className="upload-avatar-button">
              Upload Foto Profil Baru
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <p className="slogan">Slogan</p>
          <p>{profile.slogan}</p>
        </div>
      </div>

      <div className="form-section">
        <div className="personal-settings">
          <h3>Profil</h3>
          <form>
            <input
              type="text"
              name="fullName"
              placeholder="Nama Lengkap"
              value={profile.fullName}
              onChange={handleChange}
              disabled={!isEditingProfile}
            />
            <input
              type="text"
              name="nickName"
              placeholder="Nick Name"
              value={profile.nickName}
              onChange={handleChange}
              disabled={!isEditingProfile}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditingProfile}
            />
            <div className="birthday-container">
              <input
                type="date"
                name="birthday"
                value={profile.birthday}
                onChange={handleChange}
                disabled={!isEditingProfile}
              />
            </div>
            <div className="location-container">
              <input
                type="text"
                name="wargaNegara"
                placeholder="Warga Negara"
                value={profile.wargaNegara}
                onChange={handleChange}
                disabled={!isEditingProfile}
              />
              <input
                type="text"
                name="province"
                placeholder="Provinsi"
                value={profile.state}
                onChange={handleChange}
                disabled={!isEditingProfile}
              />
            </div>
            <div className="postal-phone-container">
              <input
                type="text"
                name="postalCode"
                placeholder="Kode Pos"
                value={profile.postalCode}
                onChange={handleChange}
                disabled={!isEditingProfile}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Nomor Telepon"
                value={profile.phoneNumber}
                onChange={handleChange}
                disabled={!isEditingProfile}
              />
            </div>
            <button
              type="button"
              onClick={handleUpdateProfile}
              className="update-button"
            >
              {isEditingProfile ? 'Simpan' : 'Update Profil'}
            </button>
          </form>
        </div>

        <div className="external-links">
          <h3>Link Sosial Media</h3>
          <form>
            <input
              type="url"
              name="facebookURL"
              placeholder="Facebook"
              value={profile.facebookURL}
              onChange={handleChange}
              disabled={!isEditingLinks}
            />
            <input
              type="url"
              name="twitterURL"
              placeholder="Twitter"
              value={profile.twitterURL}
              onChange={handleChange}
              disabled={!isEditingLinks}
            />
            <input
              type="url"
              name="googleURL"
              placeholder="Google"
              value={profile.googleURL}
              onChange={handleChange}
              disabled={!isEditingLinks}
            />
            <input
              type="url"
              name="linkedinURL"
              placeholder="LinkedIn"
              value={profile.linkedinURL}
              onChange={handleChange}
              disabled={!isEditingLinks}
            />
            <input
              type="url"
              name="websiteURL"
              placeholder="Website"
              value={profile.websiteURL}
              onChange={handleChange}
              disabled={!isEditingLinks}
            />
            <button
              type="button"
              onClick={handleUpdateLinks}
              className="save-update-button"
            >
              {isEditingLinks ? 'Simpan' : 'Update Link Sosial Media'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
