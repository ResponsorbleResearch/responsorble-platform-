import React from 'react';

const NotebookRenderer: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div className="notebook-renderer">
            {data.cells.map((cell: any, index: number) => (
                <div key={index} className={`cell ${cell.cell_type}`}>
                    {cell.cell_type === 'code' ? (
                        <pre>{cell.source}</pre>
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: cell.source }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default NotebookRenderer;