import { ItemDirective, ItemsDirective, TimelineComponent } from "@syncfusion/ej2-react-layouts";
import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense("Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCeEx3Rnxbf1x1ZFRHal9UTnZWUiweQnxTdEBjXH5acXVWQWRfWEN2W0lfag==");
function App() {
    const timelineData = [
        {
            Id: "1",
            parts: [
                { text: "Project ", bold: false },
                { text: "“Old CRM migration”", bold: true },
                { text: "archived by ", bold: false },
                { text: "admin", bold: true },
            ],
            time: "10:09 AM",
            icon: "e-trash",
            textColor: "text-[#4F46E5]",
            bgColor: "bg-[#E0E7FF]",
        },
        {
            Id: "2",
            parts: [
                { text: "Comment added on ", bold: false },
                { text: "“UI enhancements”", bold: true },
                { text: "by", bold: false },
                { text: "Sarah Johnson.", bold: true },
            ],
            time: "10:00 AM",
            icon: "e-comments",
            textColor: "text-[#15803D]",
            bgColor: "bg-[#DCFCE7]",
        },
        {
            Id: "3",
            parts: [
                { text: "Task ", bold: false },
                { text: "“User authentication setup”", bold: true },
                { text: "marked as complete.", bold: false },
            ],
            time: "09:39 AM",
            icon: "e-check-tick",
            textColor: "text-[#0E7490]",
            bgColor: "bg-[#CFFAFE]",
        },
        {
            Id: "4",
            parts: [
                { text: "Document ", bold: false },
                { text: "“Project requirement.pdf”", bold: true },
                { text: "uploaded by", bold: false },
                { text: "Michael Lee.", bold: true },
            ],
            time: "09:33 AM",
            icon: "e-upload-1",
            textColor: "text-[#DC2626]",
            bgColor: "bg-[#FEE2E2]",
        },
        {
            Id: "5",
            parts: [
                { text: "Task list ", bold: false },
                { text: "“API development”", bold: true },
                { text: "added to the project.", bold: false },
            ],
            time: "09:20 AM",
            icon: "e-notes",
            textColor: "text-[#C2410C]",
            bgColor: "bg-[#FFEDD5]",
        },
        {
            Id: "6",
            parts: [
                { text: "John Doe ", bold: true },
                { text: "invited", bold: false },
                { text: "Jane Smith", bold: true },
                { text: "to the project.", bold: false },
            ],
            time: "09:10 AM",
            icon: "e-user",
            textColor: "text-[#0E7490]",
            bgColor: "bg-[#CFFAFE]",
        },
        {
            Id: "7",
            parts: [" "],
            time: "09:00 AM",
            icon: "e-folder-open",
            textColor: "text-[#15803D]",
            bgColor: "bg-[#DCFCE7]",
        },
    ];
    const Template = (data: any) => {
        return (
            <div className="flex flex-col    ">
                <div>
                    <p className="text-sm">{data.parts.map((item: any) => (item.bold == true ? <span className="font-medium"> {item.text} </span> : item.bold == false ? <span className="font-normal "> {item.text} </span> : <br />))}</p>
                </div>
                <div className="time flex items-center gap-x-1 ">
                    <span className="e-icons  e-clock text-[#374151] text-xs"></span>
                    <span className="text-[#374151] text-sm font-light">{data.time}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="!flex !justify-center !items-center h-[100vh] w-[100%] ">
            <div>
                <TimelineComponent reverse={true} cssClass="custom-connector">
                    <ItemsDirective>
                        {timelineData.map((item, index) => (
                            <ItemDirective key={index} content={() => Template(item)} dotCss={`e-icons !${item.bgColor} !${item.textColor} ${item.icon}`} cssClass="!pb-5" />
                        ))}
                    </ItemsDirective>
                </TimelineComponent>
            </div>
        </div>
    );
}

export default App;
