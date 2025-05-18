import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  isCompleted: boolean;
}

const initialState: OnboardingState = {
  isCompleted: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
  },
});

export const { setOnboardingCompleted } = onboardingSlice.actions;
export default onboardingSlice.reducer;
