import React from "react";
import Layout from "../Layout/Layout";
import ProfileContent from "./Content/ProfileContent";
import ProfileSide from "./Sidebar/ProfileSide";

const Profile = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-6">
        <ProfileSide />
        <ProfileContent />
      </div>
    </Layout>
  );
};

export default Profile;
