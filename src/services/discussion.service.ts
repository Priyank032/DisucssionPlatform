import Discussion from '../models/discussion.model';

export const createDiscussion = async (text: string, image: string, hashtags: string[], createdBy: string) => {
  const discussion = new Discussion({ text, image, hashtags, createdBy });
  await discussion.save();
  return discussion;
};

export const getDiscussions = async () => {
  return await Discussion.find().populate('createdBy', 'name');
};

export const getDiscussionsByTag = async (tag: string) => {
  return await Discussion.find({ hashtags: tag }).populate('createdBy', 'name');
};

export const updateDiscussion = async (discussionId: string, updateData: any) => {
  return await Discussion.findByIdAndUpdate(discussionId, updateData, { new: true });
};

export const deleteDiscussion = async (discussionId: string) => {
  await Discussion.findByIdAndDelete(discussionId);
};
