"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import EditProfileForm from '../components/EditProfileForm';
import Button from '@/components/common/ui/Button';
import EditWebPermissions from '../components/EditWebPermissions';

export default function EditProfilesClient() {
  const params = useSearchParams();
  const profileName = params.get('profileName') || "";

  return (
    <>
      <div className="rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4 mb-4">
          <h1 className="text-xl text-[#445E94]">Edit Profile</h1>
        </div>
        <hr className="text-gray-200" />
        <div>
          <EditProfileForm initialProfileName={profileName} />
        </div>
      </div>
      <div className='bg-white rounded-full p-1 shadow-sm'>
        <Button>Web Permissions</Button>
      </div>
      <div>
        <EditWebPermissions />
      </div>
    </>
  );
}
