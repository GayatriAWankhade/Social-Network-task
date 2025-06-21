import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Modal } from '../ui/Modal';
import { User } from '../../types/user';
import { updateUserProfile } from '../../lib/api/users';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onSave: (updatedUser: User) => void; // ✅ Ensure this is included
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState((user as any).bio || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await updateUserProfile(user.id, { name, bio });
      onSave({ ...user, name, bio }); // ✅ Send updated user back
      onClose();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600">{error}</p>}
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className="w-full border px-2 py-1 rounded"
        />
        <TextareaAutosize
          minRows={3}
          value={bio}
          onChange={e => setBio(e.target.value)}
          placeholder="Bio"
          className="w-full border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </Modal>
  );
};
