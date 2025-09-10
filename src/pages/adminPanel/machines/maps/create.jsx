import React, { useState } from "react";
import { X, Monitor, ChevronDown, Scan, Plus } from "lucide-react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import UseInitialValues from "../../../../hooks/use-inital-values";
import UseFormValidation from "../../../../hooks/use-form-validation";

function CreateMachine() {
  const [activeTab, setActiveTab] = useState("smart-scan");

  const { INITIAL_VALUES_ADD_MACHINE } = UseInitialValues();
  const { VALIDATION_SCHEMA_ADD_MACHINE } = UseFormValidation();
  const bootMethodOptions = [
    { value: "", label: "Select boot method" },
    { value: "UEFI", label: "UEFI" },
    { value: "BIOS", label: "BIOS" },
    { value: "Legacy", label: "Legacy" },
  ];

  const roomOptions = [
    { value: "", label: "Select room" },
    { value: "Room A", label: "Room A" },
    { value: "Room B", label: "Room B" },
    { value: "Room C", label: "Room C" },
  ];

  const handleStartScan = () => {
    console.log("Starting smart scan...");
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    console.log("Cancelled");
    navigate("/admin-panel/machines/maps");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Adding machine:", values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-[500] text-white mb-2">
                Add Machine
              </h1>
              <p className="text-gray-400 text-sm">Limit 14 / 30</p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-sm rounded-xl border border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl max-w-2xl mx-auto bg-[rgba(19,22,27,1)]">
          {/* Tab Switcher */}
          <div className="flex p-2 gap-2 mb-8 bg-white/5 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("smart-scan")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "smart-scan"
                  ? "bg-white/20 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Smart Scan
            </button>
            <button
              onClick={() => setActiveTab("manually")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "manually"
                  ? "bg-white/20 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Manually
            </button>
          </div>

          {/* Content */}
          {activeTab === "smart-scan" ? (
            <div className="text-center py-16">
              {/* Scan Icon */}
              <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Scan className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Smart Scan
              </h3>
              <p className="text-gray-400 text-base mb-12 leading-relaxed max-w-md mx-auto">
                Smart scan will search for devices in your local network and add
                them. You can edit machines info after scanning.
              </p>

              <div className="max-w-sm mx-auto space-y-4">
                <button
                  onClick={handleStartScan}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Start Scan
                </button>

                <button
                  onClick={handleCancel}
                  className="w-full py-4 text-gray-400 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <Formik
              initialValues={INITIAL_VALUES_ADD_MACHINE}
              validationSchema={VALIDATION_SCHEMA_ADD_MACHINE}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting, isValid }) => (
                <Form className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Machine Settings
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Configure technical settings for the machine
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        Machine Name *
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                          errors.name && touched.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="Enter machine name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>

                    {/* IP Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        Primary IP *
                      </label>
                      <Field
                        type="text"
                        name="ip"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                          errors.ip && touched.ip
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="192.168.1.100"
                      />
                      <ErrorMessage
                        name="ip"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>

                    {/* MAC Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        MAC Address *
                      </label>
                      <Field
                        type="text"
                        name="mac"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                          errors.mac && touched.mac
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="00:00:00:00:00:00"
                      />
                      <ErrorMessage
                        name="mac"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>

                    {/* Second IP Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        Secondary IP *
                      </label>
                      <Field
                        type="text"
                        name="ip2"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 ${
                          errors.ip2 && touched.ip2
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-white/30"
                        }`}
                        placeholder="192.168.1.101"
                      />
                      <ErrorMessage
                        name="ip2"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>

                    {/* Boot Method Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        Boot Method *
                      </label>
                      <div className="relative">
                        <Field
                          as="select"
                          name="bootMethod"
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 appearance-none cursor-pointer ${
                            errors.bootMethod && touched.bootMethod
                              ? "border-red-500 focus:border-red-500"
                              : "border-white/10 focus:border-white/30"
                          }`}
                        >
                          {bootMethodOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-gray-800 text-white"
                            >
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        <ChevronDown
                          size={16}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                      <ErrorMessage
                        name="bootMethod"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>

                    {/* Room Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-3">
                        Room *
                      </label>
                      <div className="relative">
                        <Field
                          as="select"
                          name="room"
                          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white backdrop-blur-sm focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all duration-300 appearance-none cursor-pointer ${
                            errors.room && touched.room
                              ? "border-red-500 focus:border-red-500"
                              : "border-white/10 focus:border-white/30"
                          }`}
                        >
                          {roomOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-gray-800 text-white"
                            >
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        <ChevronDown
                          size={16}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                      <ErrorMessage
                        name="room"
                        component="div"
                        className="text-red-400 text-xs mt-2"
                      />
                    </div>
                  </div>

                  {/* Images Field - Full Width */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">
                      Machine Images
                    </label>
                    <Field name="images">
                      {({ field, form, meta }) => (
                        <div>
                          <input
                            type="file"
                            accept="image/*,.iso,.img"
                            multiple
                            onChange={(event) => {
                              const files = Array.from(
                                event.currentTarget.files
                              );
                              form.setFieldValue("images", files);
                            }}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-white/20 file:text-white hover:file:bg-white/30 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                          />
                          {values.images && values.images.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <p className="text-xs text-gray-400">
                                Selected files:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {Array.from(values.images).map(
                                  (file, index) => (
                                    <span
                                      key={index}
                                      className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 text-white text-sm rounded-lg backdrop-blur-sm border border-white/20"
                                    >
                                      {file.name}
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const newFiles = Array.from(
                                            values.images
                                          ).filter((_, i) => i !== index);
                                          form.setFieldValue(
                                            "images",
                                            newFiles
                                          );
                                        }}
                                        className="text-gray-400 hover:text-white transition-colors"
                                      >
                                        <X className="w-4 h-4" />
                                      </button>
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="images"
                      component="div"
                      className="text-red-400 text-xs mt-2"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-8">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 py-3 text-gray-400 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isValid && !isSubmitting
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? "Adding Machine..." : "Add Machine"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateMachine;
