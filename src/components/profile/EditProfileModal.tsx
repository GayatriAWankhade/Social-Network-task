// import React, { useState } from 'react';
// import { User } from '../../types/user'
// import { updateUserProfile } from '../../lib/api/users'; // assumed API call
// import { Modal } from '../ui/Modal';
// import { Input } from '../ui/Input';
// import { Button } from '../ui/Button';

// interface EditProfileModalProps {
//   user: User;
//   onClose: () => void;
//   onSave: (updatedUser: User) => void;
// }

// const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, onClose, onSave }) => {
//   const [name, setName] = useState(user.name);
//   const [bio, setBio] = useState(user.bio || '');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const updatedUser = await updateUserProfile(user.id, { name, bio });
//       onSave(updatedUser);
//     } catch (err: any) {
//       setError(err.message || 'Failed to update profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal onClose={onClose} title="Edit Profile">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && <p className="text-red-600">{error}</p>}
//         <Input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           required
//         />
//         <Input
//           as="textarea"
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
//           placeholder="Bio"
//           rows={4}
//         />
//         <div className="flex justify-end space-x-2">
//           <Button type="button" onClick={onClose} disabled={loading}>
//             Cancel
//           </Button>
//           <Button type="submit" disabled={loading}>
//             {loading ? 'Saving...' : 'Save'}
//           </Button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditProfileModal;

import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Modal } from '../ui/Modal';
import { User } from '../../types/user';
import { updateUserProfile } from '../../lib/api/users';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, user }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState((user as any).bio || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await updateUserProfile(user.id, { name, bio });
      onClose();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600">{error}</p>}
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border px-2 py-1 rounded" />
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
