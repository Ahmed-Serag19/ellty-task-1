import React, { useState } from 'react';
import { Button } from './Button';
import { CheckboxRow } from './CheckboxRow';
import { Modal } from './Modal';

// Define the shape of our page data
export interface PageData {
  id: string;
  name: string;
}

interface PageSelectorProps {
  pages: PageData[];
}

export const PageSelector: React.FC<PageSelectorProps> = ({ pages }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Derived state
  const allSelected = pages.length > 0 && selectedIds.size === pages.length;
  
  const handleToggle = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
    if (newSelected.size > 0) setError(null);
  };

  const handleToggleAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      const allIds = pages.map(p => p.id);
      setSelectedIds(new Set(allIds));
      setError(null);
    }
  };

  const handleDone = () => {
    if (selectedIds.size === 0) {
      setError("Please select at least one option");
      return;
    }
    setIsModalOpen(true);
  };

  const selectedPagesList = pages.filter(p => selectedIds.has(p.id));

  return (
    <>
      <div className="page-selector-container">
        <CheckboxRow 
          label="All pages" 
          checked={allSelected} 
          onChange={handleToggleAll} 
        />
        
        <div className="divider" />

        <div className="checkbox-list">
          {pages.map(page => (
            <CheckboxRow
              key={page.id}
              label={page.name}
              checked={selectedIds.has(page.id)}
              onChange={() => handleToggle(page.id)}
            />
          ))}
        </div>

        <div className="divider" />
        
        <Button 
          label="Done" 
          fullWidth={true} 
          onClick={handleDone} 
        />

        {error && (
          <div className="error-message">
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" stroke="currentColor" strokeWidth="1.5" />
               <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
             </svg>
             {error}
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Acting as an api call"
      >
        <div className="modal-body">
          <p className="modal-description">You have chosen:</p>
          {selectedPagesList.length > 0 ? (
            <ul className="modal-list">
              {selectedPagesList.map(p => (
                <li key={p.id}>{p.name}</li>
              ))}
            </ul>
          ) : (
            <p className="modal-empty">No pages selected.</p>
          )}
          
          <div className="modal-footer">
             <Button label="Close" onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};
