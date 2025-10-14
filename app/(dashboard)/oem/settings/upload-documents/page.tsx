// "use client"
// import Breadcrumb from '@/components/common/ui/BreadCrumb'
// import Button from '@/components/common/ui/Button'
// import React, { useState } from 'react'
// import getDocumentsCol from './components/getDocumentsCol'
// import AddDocumentModal from './components/Modals/AddDocumentModal'
// import Table from '@/components/common/table/Table'

// const UploadDocuments = () => {

//   const [documentsData, setDocumentsData] = useState([
//     {
//       id: 1,
//       srNo: "01",
//       documentName: "",
//       documentNumber: "",
//       documentDate: "",
//       version: "",
//       action: "",
//     },
//     {
//       id: 2,
//       srNo: "02",
//       documentName: "",
//       documentNumber: "",
//       documentDate: "",
//       version: "",
//       action: "",
//     },
//     {
//       id: 3,
//       srNo: "03",
//       documentName: "",
//       documentNumber: "",
//       documentDate: "",
//       version: "",
//       action: "",
//     },
//   ])

//   const [loadingDocuments, setLoadingDocuments] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [selectedRow, setSelectedRow] = useState<any>(null);

//   const handleAddDocument = (newDocument: any) => {
//     setDocumentsData(prev => {
//       const data = [...prev, newDocument].map((item, idx) => ({
//         ...item,
//         srNo: String(idx + 1).padStart(2, '0'),
//       }));
//       return data;
//     });
//   };

//   const handleDownload = () => {
//     alert("Download clicked...")
//   }
//   const handleDeleteClick = (row: any) => {
//     setSelectedRow(row);
//     setIsDeleteModalOpen(true);
//   };
//   const confirmDelete = () => {
//     setDocumentsData(prev => {
//       const newData = prev.filter(item => item.id !== selectedRow.id);
//       return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
//     });
//     setIsDeleteModalOpen(false);
//     setSelectedRow(null);
//   };

//   const documentsColumns = getDocumentsCol(handleDownload, handleDeleteClick);

//   const handleRefreshDocuments = () => {
//     setLoadingDocuments(true);
//     setTimeout(() => {
//       setLoadingDocuments(false);
//       setDocumentsData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
//     }, 1000);
//   };

//   return (
//     <div className='space-y-4'>
//       <Breadcrumb
//         crumbs={[
//           { label: "Home", href: "/oem/dashboard" },
//           { label: "Settings", isClickable: false },
//           { label: "Documents", href: "/oem/settings/upload-documents" },
//         ]}
//       />
//       <h1 className="text-3xl font-semibold text-[#445E94]">Documents</h1>
//       <div className='flex justify-end'>
//         <Button onClick={() => setIsAddModalOpen(true)}><span className='text-xl mr-3'>+</span>Add Documents</Button>
//       </div>
//       <div className="space-y-4 rounded-lg bg-white shadow-sm">
//         <div className="flex justify-between px-6 pt-4">
//           <h1 className="text-xl text-[#445E94]">Store Type List</h1>
//         </div>
//         <hr className="text-gray-200" />
//         <div className="px-6 py-4">
//           <Table
//             rows={documentsData}
//             columns={documentsColumns}
//             onRefresh={handleRefreshDocuments}
//             loading={loadingDocuments}
//             showPagination
//             rowsPerPage={3}
//           />
//         </div>
//       </div>
//       {isAddModalOpen && (
//         <AddDocumentModal
//           isOpen={isAddModalOpen}
//           onClose={() => setIsAddModalOpen(false)}
//           onSave={handleAddDocument}
//           nextSrNo={String(documentsData.length + 1).padStart(2, '0')}
//         />
//       )}
//     </div>
//   )
// }

// export default UploadDocuments

"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import getDocumentsCol from './components/getDocumentsCol'
import AddDocumentModal from './components/Modals/AddDocumentModal'
import Table from '@/components/common/table/Table'
import DeleteDocumentModal from './components/Modals/DeleteDocumentModal'

const UploadDocuments = () => {
  const [documentsData, setDocumentsData] = useState([
    {
      id: 1,
      srNo: "01",
      documentName: "",
      documentNumber: "",
      documentDate: "",
      version: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      documentName: "",
      documentNumber: "",
      documentDate: "",
      version: "",
      action: "",
    },
    {
      id: 3,
      srNo: "03",
      documentName: "",
      documentNumber: "",
      documentDate: "",
      version: "",
      action: "",
    },
  ]);

  const [loadingDocuments, setLoadingDocuments] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  // Always create a unique ID and re-index srNo after add
  const handleAddDocument = (newDocument: any) => {
    setDocumentsData(prev => {
      const data = [
        ...prev,
        {
          ...newDocument,
          id: Date.now(), // guarantee unique id per row, or use a uuid
        }
      ].map((item, idx) => ({
        ...item,
        srNo: String(idx + 1).padStart(2, '0'),
      }));
      return data;
    });
  };

  // Always re-index both id and srNo after delete
  const confirmDelete = () => {
    setDocumentsData(prev => {
      const newData = prev
        .filter(item => item.id !== selectedRow.id)
        .map((item, idx) => ({
          ...item,
          id: idx + 1, // Overwrite id to be unique and stable; or use Date.now()/uuid here too
          srNo: String(idx + 1).padStart(2, '0'),
        }));
      return newData;
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleDownload = () => {
    alert("Download clicked...")
  };
  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const documentsColumns = getDocumentsCol(handleDownload, handleDeleteClick);

  // Always re-index srNo and (optionally) id after refresh
  const handleRefreshDocuments = () => {
    setLoadingDocuments(true);
    setTimeout(() => {
      setLoadingDocuments(false);
      setDocumentsData(prev =>
        prev.map((item, idx) => ({
          ...item,
          id: idx + 1, // Or keep the original id if you want them stable
          srNo: String(idx + 1).padStart(2, '0'),
        }))
      );
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Documents", href: "/oem/settings/upload-documents" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Documents</h1>
      <div className='flex justify-end'>
        <Button onClick={() => setIsAddModalOpen(true)}><span className='text-xl mr-3'>+</span>Add Documents</Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Document List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={documentsData}
            columns={documentsColumns}
            onRefresh={handleRefreshDocuments}
            loading={loadingDocuments}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <AddDocumentModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddDocument}
          nextSrNo={String(documentsData.length + 1).padStart(2, '0')}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteDocumentModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default UploadDocuments;
