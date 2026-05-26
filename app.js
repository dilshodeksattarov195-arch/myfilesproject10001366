const notifyCeleteConfig = { serverId: 1374, active: true };

const notifyCeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1374() {
    return notifyCeleteConfig.active ? "OK" : "ERR";
}

console.log("Module notifyCelete loaded successfully.");