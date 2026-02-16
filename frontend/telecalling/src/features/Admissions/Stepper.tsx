export const StepIndicator = ({currentStep}) => (
    <div className="flex items-center text-2xl justify-center space-x-4 mb-8 font-medium">
      <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
        <span className={`w-6 h-6 rounded-full flex items-center p-5 justify-center mr-2 ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</span>
        Admission Details
      </div>
      <div className={`w-12 h-0.5 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
      <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center p-5 mr-2 ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</span>
        Payment
      </div>
      <div className={`w-12 h-0.5 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
      <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center p-5 mr-2 ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</span>
        Complete
      </div>
    </div>
  );